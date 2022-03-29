import { NetworkConfig } from '@/Network/types';
import { LocalnetConfig } from '@/Network/constants';
import { activeNetwork } from '@/Network/network';

export function isFujiNetwork(_: NetworkConfig) {
    return false;
}

export function isMainnetNetwork(_: NetworkConfig) {
    return false;
}

export function isLocalNetwork(activeNetwork: NetworkConfig) {
    return activeNetwork.networkID === LocalnetConfig.networkID;
}

export function getAvaxAssetID() {
    return activeNetwork.avaxID;
}

export function getActiveNetworkConfig() {
    return activeNetwork;
}
