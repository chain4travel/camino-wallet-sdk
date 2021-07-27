import { NetworkConfig } from './types';
import { MainnetConfig, TestnetConfig, LocalnetConfig } from '@/Network/constants';
import { activeNetwork, setRpcNetwork, getEvmChainID } from '@/Network/network';
import WebsocketProvider from '@/Network/providers/WebsocketProvider';
import { bustErc20Cache } from '@/Asset/Erc20';

export function setNetwork(conf: NetworkConfig) {
    setRpcNetwork(conf);
    bustErc20Cache();
}

export function isFujiNetwork(activeNetwork: NetworkConfig) {
    return activeNetwork.networkID === TestnetConfig.networkID;
}

export function isMainnetNetwork(activeNetwork: NetworkConfig) {
    return activeNetwork.networkID === MainnetConfig.networkID;
}

export function isLocalNetwork(activeNetwork: NetworkConfig) {
    return activeNetwork.networkID === LocalnetConfig.networkID;
}

// Default connection is Mainnet
setNetwork(MainnetConfig);

export function getAvaxAssetID() {
    return activeNetwork.avaxID;
}

export { WebsocketProvider, getEvmChainID };

export { NetworkConfig } from './types';
export { activeNetwork } from '@/Network/network';
