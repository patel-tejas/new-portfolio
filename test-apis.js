const fetch = require('node-fetch');

async function testYahooV8(symbol) {
  try {
    const res = await fetch(`https://query2.finance.yahoo.com/v8/finance/chart/${symbol}`);
    console.log(symbol, 'status:', res.status);
    const data = await res.json();
    const result = data.chart?.result?.[0];
    if (result) {
      console.log(symbol, 'price:', result.meta.regularMarketPrice, 'prev:', result.meta.previousClose);
    } else {
      console.log(symbol, 'no result');
    }
  } catch (e) {
    console.error(symbol, 'err:', e.message);
  }
}

async function run() {
  await testYahooV8('^NSEI');
  await testYahooV8('^BSESN');
  await testYahooV8('BTC-USD');
  await testYahooV8('GC=F');
}

run();
