import { ChainIdType } from '@/common';
import { avalanche } from '@/Network/network';

/**
 * Given a chain alias, returns the chain id.
 * @param alias `X`, `P` or `C`
 */
export function chainIdFromAlias(alias: ChainIdType) {
    if (alias === 'X') {
        return avalanche().XChain().getBlockchainID();
    } else if (alias === 'P') {
        return avalanche().PChain().getBlockchainID();
    } else if (alias === 'C') {
        return avalanche().CChain().getBlockchainID();
    }
    throw new Error('Unknown chain alias.');
}
