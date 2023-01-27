import { UniversalNodeAbstract } from "./UniversalNode";
import { ExportChainsC } from "../Wallet/types";
import { UniversalTxActionExportC, UniversalTxActionImportC, UniversalTxExportC, UniversalTxImportC } from "./types";
import { BN } from '@c4tplatform/caminojs/dist';
export default class UniversalNodeC extends UniversalNodeAbstract {
    constructor(balance: BN, feeExport: BN, feeImport: BN);
    buildExportTx(destChain: ExportChainsC, amount: BN): UniversalTxExportC;
    buildImportTx(sourceChain: ExportChainsC): UniversalTxImportC;
    getExportMethod(to: ExportChainsC): UniversalTxActionExportC;
    getImportMethod(from: ExportChainsC): UniversalTxActionImportC;
}
