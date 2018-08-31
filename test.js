const axios = require("axios");
const chalk = require("chalk");
const config = require('./config')

const http = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com",
  headers: {
    'X-CMC_PRO_API_KEY': config.COINMARKETCAP_API_KEY,
    json: true
  }
})


/
async function greatestChange () {
  try {
    const CryptoAPI = http.get(`v1/cryptocurrency/listings/latest`);
    const response = await CryptoAPI

    let result = {};

    response.data.data.forEach(crypto => {
      const cryptoName = crypto.name
      const percentChange = crypto.quote.USD.percent_change_1h
      result[cryptoName] = percentChange
    })
  }
  catch (err) {
    console.error(chalk.red(err))
    console.dir(err.response, { colors: true, depth: 4 });
  }
}

fetchData()