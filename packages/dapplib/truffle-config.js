require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purpose half kitten outer then'; 
let testAccounts = [
"0x9e04a1c80c8d2e0d6e2e51847443ca62b22111203963d055fecd9044726b75dd",
"0x10315cb8cff68098f162732dc67812a79cb7718870bfb18482daaa8eaea6cc3e",
"0xb819b5fcee1ca0c6b1ca13466ccdce1409991179839110ac010d0af2200c7a21",
"0xf42e4d80fc6aee1e84d9344b724b623f234eb37b5c9664929e2f418c7d9856df",
"0x920041ff934f820e21ad10d040928e236fcd248c93a5db38f6ea0c476df30852",
"0xcb10c2b96d759157cabcbdd580779df947a71075c5c348628ab8c0a75ebee5a0",
"0x2735ce61588a9a3f2e134ec0835f128903621d16f2232a093af9989f48983584",
"0x8cc1536fabb21ea03a9ab374bde34d032d98cfa7ea74f6c36b8f26f956a2fb0c",
"0xe441a60c0119100f0ca0322b7fce3e8cfca92a0cd455c6c0114ec0ef813e1957",
"0x745aa579f60d70519eaaada5ecccc11f481b5bedd6ecd4caed891149979ff010"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


