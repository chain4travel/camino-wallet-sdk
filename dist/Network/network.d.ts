import { Avalanche } from '@c4tplatform/caminojs/dist';
import Web3 from 'web3';
import { NetworkConfig } from './types';
import { ethers } from 'ethers';
import { HttpClient } from "../helpers/http_client";
export declare const avalanche: () => Avalanche;
export declare const web3: Web3;
export declare let ethersProvider: ethers.providers.JsonRpcProvider;
export declare let explorer_api: HttpClient | null;
export declare let activeNetwork: NetworkConfig;
/**
 * Returns the evm chain ID of the active network
 */
export declare function getEvmChainID(): number;
/**
 * Changes the connected network of the SDK.
 * This is a synchronous call that does not do any network requests.
 * @param conf
 * @param credentials
 */
export declare function setAvalanche(ava: Avalanche): void;
