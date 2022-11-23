import { HDWalletAbstract } from "./HDWalletAbstract";
import { UnsignedTx as EVMUnsignedTx, Tx as EVMTx } from '@c4tplatform/caminojs/dist/apis/evm';
import { UnsignedTx as PlatformUnsignedTx, Tx as PlatformTx } from '@c4tplatform/caminojs/dist/apis/platformvm';
import { UnsignedTx as AVMUnsignedTx, Tx as AVMTx } from '@c4tplatform/caminojs/dist/apis/avm';
import { Transaction } from '@ethereumjs/tx';
import { WalletNameType } from "./types";
import { EvmWallet } from "./EVM/EvmWallet";
import { EvmWalletReadonly } from "./EVM/EvmWalletReadonly";
import { TypedDataV1, TypedMessage } from '@metamask/eth-sig-util';
export declare class PublicMnemonicWallet extends HDWalletAbstract {
    /**
     *
     * @param xpubAVM of derivation path m/44'/9000'/n' where `n` is the account index
     * @param xpubEVM of derivation path m/44'/60'/0'/0/n where `n` is the account index
     */
    constructor(xpubAVM: string, xpubEVM: string);
    evmWallet: EvmWallet | EvmWalletReadonly;
    type: WalletNameType;
    signC(tx: EVMUnsignedTx): Promise<EVMTx>;
    signEvm(tx: Transaction): Promise<Transaction>;
    signP(tx: PlatformUnsignedTx): Promise<PlatformTx>;
    signX(tx: AVMUnsignedTx): Promise<AVMTx>;
    personalSign(data: string): Promise<string>;
    /**
     * V1 is based upon an early version of EIP-712 that lacked some later security improvements, and should generally be neglected in favor of later versions.
     * @param data The typed data to sign.
     * */
    signTypedData_V1(data: TypedDataV1): Promise<string>;
    /**
     * V3 is based on EIP-712, except that arrays and recursive data structures are not supported.
     * @param data The typed data to sign.
     */
    signTypedData_V3(data: TypedMessage<any>): Promise<string>;
    /**
     * V4 is based on EIP-712, and includes full support of arrays and recursive data structures.
     * @param data The typed data to sign.
     */
    signTypedData_V4(data: TypedMessage<any>): Promise<string>;
}
