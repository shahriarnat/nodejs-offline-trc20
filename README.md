# TRC20 Wallet Generator from Seed Phrase

This project provides a way to generate a TRC20 wallet address and private key using a mnemonic phrase. It operates securely and offline, enabling users to create wallets without requiring internet access.

## Features
- **Offline wallet generation**: No need for an internet connection to create the wallet.
- **Mnemonic-based**: Generate wallets using a mnemonic phrase (BIP39 standard).
- **Custom derivation path**: Uses the TRON-specific derivation path (`m/44'/195'/0'/0/0`).

## Installation

Before using this project, ensure you have [Node.js](https://nodejs.org) installed.

1. Clone this repository or copy the script.
2. Install the required dependencies:
3. use command <code>npm install tronweb bip39 hdkey </code>

## Steps to Generate a TRC20 Wallet

1. Replace **import your mnemonic phrases here'** with your own valid mnemonic phrase.
2. Run the script
> node TronWalletGenerateOffline.js

## The script will output the TRON wallet address and private key
> TRON Wallet Address: TXk5X1f5x3xx...your_address...
> Private Key: 09c7e2d7...your_private_key...

## Derivation Path

The derivation path used for TRON wallets is
> m/44'/195'/0'/0/0
- 44': BIP44 standard.
- 195': Coin type for TRON.
- 0': Account.
- 0: Change.
- 0: Address index.

## Dependencies

tronweb: TRON JavaScript library.
bip39: Mnemonic phrase generation and validation.
hdkey: HD wallet key derivation.

## Notes

Security: Keep your mnemonic and private key safe. Do not share them with anyone.
Offline Use: This script can run offline. No sensitive information is transmitted.

## License

- This project is open-source and available under the MIT License.
