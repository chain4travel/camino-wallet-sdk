import { MnemonicWallet } from '@/Wallet/MnemonicWallet';
import { TEST_MNEMONIC } from './constants';

jest.mock('web3', () => {
    let web3Mock: any = jest.fn().mockImplementation(() => {});

    (web3Mock as any).providers = {
        WebsocketProvider: jest.fn().mockImplementation(() => {}),
    };

    return web3Mock;
});

jest.mock('@/Network/network', () => {
    return {
        avalanche: jest.fn().mockReturnValue({
            getNetworkID: jest.fn().mockReturnValue(1),
            getHRP: jest.fn().mockReturnValue('local'),
        }),
        //@ts-ignore
        web3: {
            providers: {
                WebsocketProvider: jest.fn().mockImplementation(() => function () {}),
            },
            provider: {
                send: jest.fn().mockReturnValue('send'),
            },
            eth: {
                Contract: jest.fn().mockImplementation(() => function () {}),
                getBlockNumber: () => 1,
            },
        },
    };
});

describe('Mnemonic Wallet', () => {
    const wallet = MnemonicWallet.fromMnemonic(TEST_MNEMONIC);

    it('can return initial X address', () => {
        expect(wallet.getAddressX()).toEqual('X-local19v8flm9qt2gv2tctztjjerlgs4k3vgjssa66wl');
    });

    it('can return initial P address', () => {
        expect(wallet.getAddressP()).toEqual('P-local19v8flm9qt2gv2tctztjjerlgs4k3vgjssa66wl');
    });

    it('can return initial C address', () => {
        expect(wallet.getAddressC()).toEqual('0x6a23c16777a3A194b2773df90FEB8753A8e619Ee');
    });

    it('can return C chain bech32 address', () => {
        expect(wallet.getEvmAddressBech()).toEqual('C-local1t5dhkc4myzvyqsct3dmaue2hc43na8qhgl8q9a');
    });
});
