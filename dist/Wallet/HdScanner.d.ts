import * as bip32 from 'bip32';
import { KeyPair as AVMKeyPair, KeyChain as AVMKeyChain } from '@c4tplatform/caminojs/dist/apis/avm/keychain';
import { KeyChain as PlatformKeyChain, KeyPair as PlatformKeyPair } from '@c4tplatform/caminojs/dist/apis/platformvm';
import { HdChainType } from './types';
declare type AddressCache = {
    [index: string]: bip32.BIP32Interface;
};
declare type KeyCacheX = {
    [index: string]: AVMKeyPair;
};
declare type KeyCacheP = {
    [index: string]: PlatformKeyPair;
};
export declare class HdScanner {
    protected index: number;
    protected addressCache: AddressCache;
    protected keyCacheX: KeyCacheX;
    protected keyCacheP: KeyCacheP;
    readonly changePath: string;
    private avmAddrFactory;
    readonly accountKey: bip32.BIP32Interface;
    constructor(accountKey: bip32.BIP32Interface, isInternal?: boolean);
    getIndex(): number;
    setIndex(index: number): void;
    increment(): number;
    getAddressX(): string;
    getAddressP(): string;
    /**
     * Returns every address up to and including the current index.
     * @param chainId Either X or P
     */
    getAllAddresses(chainId?: HdChainType): Promise<string[]>;
    /**
     * Returns every address up to and including the current index synchronously.
     * @param chainId Either X or P
     */
    getAllAddressesSync(chainId?: HdChainType): string[];
    /**
     * Returns addresses in the given range
     * @param start Start index
     * @param end End index, exclusive
     * @param chainId  `X` or `P` optional, returns X by default
     */
    getAddressesInRange(start: number, end: number, chainId?: HdChainType): Promise<string[]>;
    /**
     * Returns addresses in the given range
     * @param start Start index
     * @param end End index, exclusive
     * @param chainId  `X` or `P` optional, returns X by default
     */
    getAddressesInRangeSync(start: number, end: number, chainId?: HdChainType): string[];
    getKeyChainX(): AVMKeyChain;
    getKeyChainP(): PlatformKeyChain;
    getKeyForIndexX(index: number): AVMKeyPair;
    getKeyForIndexP(index: number): PlatformKeyPair;
    private getHdKeyForIndex;
    getAddressForIndex(index: number, chainId?: HdChainType): string;
    resetIndex(startIndex?: number): Promise<number>;
    private findAvailableIndexExplorer;
    private findAvailableIndexNode;
}
export {};
