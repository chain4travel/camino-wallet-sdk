import { avalanche } from '@/Network/network';
import { BN } from '@c4tplatform/caminojs/dist';

/**
 * Returns the transaction fee for X chain.
 */
export function getTxFeeX(): BN {
    return avalanche().XChain().getTxFee();
}

/**
 * Returns the transaction fee for P chain.
 */
export function getTxFeeP(): BN {
    return avalanche().PChain().getTxFee();
}
