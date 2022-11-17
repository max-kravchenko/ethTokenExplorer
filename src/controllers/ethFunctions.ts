/* eslint-disable node/no-unsupported-features/node-builtins */

import {ethFunctions} from '../functions/ethFunctions';
import {promises as fs} from 'fs';

const uri = process.env.API?.toString();
const ercAddress = process.env.ADDRESS?.toString();

const {createAlchemyWeb3} = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(uri);
const ercFunctions = ethFunctions(web3);

export const getBalance = async (req, res) => {
  const {adress} = req.params;

  const tokenBalance = await ercFunctions.getTokenBalances(adress);

  if (!tokenBalance) {
    res.sendStatus(404);
    return;
  }

  res.send(tokenBalance);
};

export const getSavedBalance = async () => {
  const tokenBalance = await ercFunctions.getTokenBalances(ercAddress);

  await fs.writeFile(
    './balance.json',
    JSON.stringify({
      tokenBalance,
      fetchedAt: new Date().toISOString(),
    })
  );
};
