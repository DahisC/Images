const fs = require('fs');
const axios = require('axios');

const sheetId = '12Da53Wv7IpJCkC5xjgQAnJGZ9451T6Tf76mkhurSBsc';

const gid = {
  Common: 0,
  Exception: 872461849,
  Error: 1716244250,
  Flagmap: 878857132,
  Admin: 1723346815,
  Dealer: 126890182,
  Tablet: 1403093468,
};

async function download() {
  const res = await axios.get(
    'https://docs.google.com/spreadsheets/d/12Da53Wv7IpJCkC5xjgQAnJGZ9451T6Tf76mkhurSBsc/gviz/tq?tqx=out:csv&gid=872461849'
  );
  console.log(res);
  res.data.replace('"",', '');
  res.data.replace('"', '');
  fs.writeFileSync('test.csv', res.data);
}

download();

console.log('yoyoyo');