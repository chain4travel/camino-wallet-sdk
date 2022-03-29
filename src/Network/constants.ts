import { NetworkConfig } from './types';
import {
    DefaultPlatformChainID,
    TestAvaxAssetID,
    TestCBlockchainID,
    TestXBlockchainID,
} from 'avalanche/dist/utils/constants';
import { getRpcC, getRpcP, getRpcX } from './helpers/rpcFromConfig';

export const LocalnetConfig: NetworkConfig = {
    rawUrl: 'http://localhost:9650',
    apiProtocol: 'http',
    apiIp: 'localhost',
    apiPort: 9650,
    networkID: 12345,
    // @ts-ignore
    xChainID: TestXBlockchainID,
    // @ts-ignore
    pChainID: DefaultPlatformChainID,
    // @ts-ignore
    cChainID: TestCBlockchainID,
    // @ts-ignore
    evmChainID: 43112,
    // @ts-ignore
    avaxID: TestAvaxAssetID,
    get rpcUrl() {
        return {
            c: getRpcC(this),
            p: getRpcP(this),
            x: getRpcX(this),
        };
    },
};

// Default network connection
export const DefaultConfig = LocalnetConfig;
