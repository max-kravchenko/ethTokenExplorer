# Server for fetching ERC20 / ETH token balances

This is the **demo server** to get the balance of ERC20/ETH native tokens from the wallet address and save the balance to the json file. Server built with TypeScript / NodeJS / Web3.js(Alchemy) / Express.

## Video demo
[<img src="./img/demo.png" width="50%">](https://www.loom.com/share/ddc7c12551c6461597f925780a73e9f0)

## Usage Instructions

To to run the project locally, follow these easy steps:

1. Clone the project to your local directory using HTTPS or SSH links:
```sh
HTML
$ git clone https://github.com/max-kravchenko/ethTokenExplorer.git
SSH
$ git clone git@github.com:max-kravchenko/ethTokenExplorer.git
```

2. Open the project and install all dependencies for the project in the root folder:
```
$ npm i
```
3. Start the project at localhost:
```
$ npm start
```
4. The localhost:3000 with default wallet address will open and demonstrate the balances. You can change the address to view different wallets.
```
Example: http://localhost:3000/0xA145ac099E3d2e9781C9c848249E2e6b256b030D
```
5. Simultaneously the job to write balance to file is running saving balance info to ./balance.json. To change the adress of wallet, modify the ADDRESS variable in .env file.
</br>

6. Enjoy your time and happy coding!

## Bonus. Explore some of top-100 richest ETH addresses
- 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 - 3,9mln ETH.
- 0x0716a17fbaee714f1e6ab0f9d59edbc5f09815c0
- 0x8315177ab297ba92a06054ce80a67ed4dbd7ed3a
- 0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae
- 0xdf9eb223bafbe5c5271415c75aecd68c21fe3d7f
- 0xe92d1a43df510f82c66382592a047d288f85226f
- 0xb29380ffc20696729b7ab8d093fa1e2ec14dfe2b
- 0xc882b111a75c0c657fc507c04fbfcd2cc984f071
