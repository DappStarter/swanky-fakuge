require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name rebel mad huge guess civil army gaze'; 
let testAccounts = [
"0xbeee124dd1f37a623276786762ca85aa4c351fbf58a76d0e1f6e2a6f1aab3bd0",
"0xd46d8f932ae2700d391eecaaba37a96389dbdd53f40ca3918cb61eeaafab7458",
"0x033876417a76fd12fe729de0b0b5747398e0e67b484660d62859a071ad0d0459",
"0x4e637966cea9284a789cc8426614be08bdb851ddd79bfaea28d6ea00773c839f",
"0xc161a9b5691f8b00b1d2664da8cbe138bcb1d78fa70ff2ce4a14fe3974be8e47",
"0x646a579e1c6d9880429ee35f763ffb7a07ffc7c54a15710761d47b2867f20235",
"0x909dd536605eeb77f1393a98daa0cd51505d05ae5263cfc37ace836e11587602",
"0x9eae92932c1baa097fa75aa347d115ab46de256bc82963cd4ae386d94aad5b6f",
"0x507fa50a0715bd07cd9540857ff05ea95a5ce8fa6f4d47bac99e3ae66b9ffc59",
"0x15b21445a40ac5b69ad17bf475a247262551e3815e7c8e1b9a4ba589ec530bf8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
