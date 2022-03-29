import { Avalanche } from 'avalanche/dist';
import Web3 from 'web3';
import { DefaultConfig } from './constants';
import { NetworkConfig, NetworkConfigRpc, NetworkProtocolType } from './types';
import { getRpcC, getRpcP, getRpcX } from './helpers/rpcFromConfig';
import { createAvalancheProvider } from '@/helpers/network_helper';
import { FetchHttpProvider } from '@/utils/FetchHTTPProvider';
import { getEthersJsonRpcProvider } from '@/Network/getEthersProvider';
import { ethers } from 'ethers';
import { HttpClient } from '@/helpers/http_client';
import { emitNetworkChange } from '@/Network/eventEmitter';
import { bustErc20Cache } from '@/Asset/Erc20';

let avaInst: Avalanche = createAvalancheProvider(DefaultConfig);

export const avalanche = () => avaInst;

function getProviderFromUrl(url: string, credentials = false) {
    return new FetchHttpProvider(url, {
        timeout: 20000,
        withCredentials: credentials,
    });
}

const rpcUrl = getRpcC(DefaultConfig);
export const web3 = new Web3(getProviderFromUrl(rpcUrl, true) as any);
// JSON RPC Ethers provider
export let ethersProvider: ethers.providers.JsonRpcProvider = getEthersJsonRpcProvider(DefaultConfig);
export let explorer_api: HttpClient | null = null;
export let activeNetwork: NetworkConfig = DefaultConfig;

/**
 * Returns the evm chain ID of the active network
 */
export function getEvmChainID(): number {
    return activeNetwork.evmChainID;
}

/**
 * Changes the connected network of the SDK.
 * This is a synchronous call that does not do any network requests.
 * @param conf
 * @param credentials
 */
export function setAvalanche(ava: Avalanche): void {
    avaInst = ava;

    let conf: NetworkConfig = {
        rawUrl: ava.getURL(),
        apiProtocol: ava.getProtocol().toLowerCase() as NetworkProtocolType,
        apiIp: ava.getHost(),
        apiPort: ava.getPort(),
        networkID: ava.getNetworkID(),
        xChainID: ava.getNetwork().X.blockchainID,
        pChainID: ava.getNetwork().P.blockchainID,
        cChainID: ava.getNetwork().C.blockchainID,
        avaxID: ava.getNetwork().X.avaxAssetID,
        evmChainID: ava.getNetwork().C.chainID ?? 0,
        get rpcUrl(): NetworkConfigRpc {
            return {
                c: getRpcC(this),
                p: getRpcP(this),
                x: getRpcX(this),
            };
        },
    };

    const useCredentials = ava.getRequestConfig().withCredentials === true;

    let rpcUrl = getRpcC(conf);
    web3.setProvider(getProviderFromUrl(rpcUrl, useCredentials) as any);
    // Update ethers provider
    ethersProvider = getEthersJsonRpcProvider(conf);

    activeNetwork = conf;

    emitNetworkChange(conf);
    bustErc20Cache();
}
