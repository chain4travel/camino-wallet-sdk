import { UTXOSet as AVMUTXOSet } from '@c4tplatform/caminojs/dist/apis/avm/utxos';
import { UTXOSet as PlatformUTXOSet } from '@c4tplatform/caminojs/dist/apis/platformvm/utxos';
import { UTXOSet as EVMUTXOSet } from '@c4tplatform/caminojs/dist/apis/evm/utxos';
import { ExportChainsC, ExportChainsP, ExportChainsX } from "../Wallet/types";
import { GetStakeResponse } from '@c4tplatform/caminojs/dist/apis/platformvm/interfaces';
/**
 *
 * @param addrs an array of X chain addresses to get the atomic utxos of
 * @param sourceChain Which chain to check against, either `P` or `C`
 */
export declare function avmGetAtomicUTXOs(addrs: string[], sourceChain: ExportChainsX): Promise<AVMUTXOSet>;
export declare function platformGetAtomicUTXOs(addrs: string[], sourceChain: ExportChainsP): Promise<PlatformUTXOSet>;
export declare function evmGetAtomicUTXOs(addrs: string[], sourceChain: ExportChainsC): Promise<EVMUTXOSet>;
export declare function getStakeForAddresses(addrs: string[]): Promise<GetStakeResponse>;
export declare function avmGetAllUTXOs(addrs: string[]): Promise<AVMUTXOSet>;
export declare function avmGetAllUTXOsForAddresses(addrs: string[], endIndex?: any): Promise<AVMUTXOSet>;
export declare function platformGetAllUTXOs(addrs: string[]): Promise<PlatformUTXOSet>;
export declare function platformGetAllUTXOsForAddresses(addrs: string[], endIndex?: any): Promise<PlatformUTXOSet>;
