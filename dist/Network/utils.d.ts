import { NetworkConfig } from "./types";
export declare function isFujiNetwork(_: NetworkConfig): boolean;
export declare function isMainnetNetwork(_: NetworkConfig): boolean;
export declare function isLocalNetwork(activeNetwork: NetworkConfig): boolean;
export declare function getAvaxAssetID(): string;
export declare function getActiveNetworkConfig(): NetworkConfig;
