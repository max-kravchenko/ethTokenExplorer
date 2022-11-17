const fs = require('fs');

export const ethFunctions = (web3: any) => {
  const getTokenName = async (adress: String) => {
    const tokenABI = JSON.parse(fs.readFileSync('tokenABI.json'));

    const tokenContract = new web3.eth.Contract(tokenABI, adress);

    const tokenName = await tokenContract.methods.name().call();

    return tokenName;
  };

  const getDecimal = async (adress: String) => {
    const tokenABI = JSON.parse(fs.readFileSync('tokenABI.json'));

    const contractToken = new web3.eth.Contract(tokenABI, adress);

    const tokenDecimal = await contractToken.methods.decimals().call();

    return tokenDecimal;
  };

  const getTokenBalances = async (adress: String | undefined) => {
    const erc20TokenBalance = await web3.alchemy.getTokenBalances(adress);

    const ethTokenBalance =
      (await web3.eth.getBalance(adress)) / Math.pow(10, 18);

    const balance = erc20TokenBalance.tokenBalances.filter(
      (token: {tokenBalance: string}) => token.tokenBalance !== '0'
    );

    const enhancedBalance: {}[] = [];

    for (const token of balance) {
      const newToken = await getTokenName(token.contractAddress);
      const supply =
        token.tokenBalance /
        Math.pow(10, await getDecimal(token.contractAddress));

      const obj = {
        [newToken]: supply + ' coin(-s)',
      };

      enhancedBalance.push(obj);
    }

    const obj = {
      ERC20: enhancedBalance,
      ETH: ethTokenBalance,
    };

    return obj;
  };

  return {
    getTokenName: getTokenName,
    getDecimal: getDecimal,
    getTokenBalances: getTokenBalances,
  };
};
