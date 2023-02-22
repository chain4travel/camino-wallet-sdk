import { ERC721Abi } from '@/helpers/tx_helper';
import { ContractFactory, ContractInterface } from 'ethers';
// import { web3 } from '@/Network';
// import { AbiItem } from 'web3-utils';
/**
 * Returns an ethers ERC721 Contract
 * @param address
 */
export function getErc721TokenEthers(address: string) {
    return ContractFactory.getContract(address, (ERC721Abi as unknown) as ContractInterface);
}

/**
 * Returns an web3 ERC721 Contract
 * @param address
 */
// export function getErc721TokenWeb3(address: string) {
//     return new web3.eth.Contract(abi as AbiItem[], address);
// }
