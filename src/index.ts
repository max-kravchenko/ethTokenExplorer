import express = require('express');
require('dotenv').config();

import schedule = require('node-schedule');
import * as BalanceController from './controllers/ethFunctions';

const app = express();

schedule.scheduleJob('* * * * *', BalanceController.getSavedBalance);

app.get('/:adress', BalanceController.getBalance);

app.listen(3000, async () => {
  console.log('Me running on http://localhost:3000');
});
