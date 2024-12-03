const TronWeb = require('tronweb');
const bip39 = require('bip39');
const HDKey = require('hdkey');

const generateTronWalletFromSeed = async (mnemonic) => {
    // Validate the mnemonic
    if (!bip39.validateMnemonic(mnemonic)) {
        throw new Error('Invalid mnemonic phrase.');
    }

    // Generate seed from mnemonic
    const seed = await bip39.mnemonicToSeed(mnemonic);

    // Derive an HD node using the seed
    const hdNode = HDKey.fromMasterSeed(seed);

    // Derive the first account (m/44'/195'/0'/0/0 for TRON)
    const derivationPath = "m/44'/195'/0'/0/0";
    const childNode = hdNode.derive(derivationPath);

    // Generate private key and address
    const privateKey = childNode.privateKey.toString('hex');
    const tronWeb = new TronWeb({
        fullHost: 'https://api.trongrid.io',
        privateKey
    });

    // Get the public address
    const address = tronWeb.address.fromPrivateKey(privateKey);

    return { address, privateKey };
};

// Example usage
(async () => {
    const mnemonic = 'inport your mnemonic phrases here';

    try {
        const wallet = await generateTronWalletFromSeed(mnemonic);
        console.log('TRON Wallet Address:', wallet.address);
        console.log('Private Key:', wallet.privateKey);
    } catch (error) {
        console.error('Error generating wallet:', error.message);
    }
})();
