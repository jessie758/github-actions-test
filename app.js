const express = require('express');
const app = express();

const dotenv = require('dotenv');

if (!process.env.NODE_ENV) {
  console.log(
    `'process.env.NODE_ENV' is not defined. It will be set as 'development'`
  );
  process.env.NODE_ENV = 'development';
}
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

console.log('---印出環境變數---');
console.log(process.env.SESSION_SECRET);
console.log(process.env.SESSION_RE_SAVE);
console.log(process.env.SESSION_SAVE_UNINITIALIZED);
console.log(process.env.ROOT_ADMIN_EMAIL);
