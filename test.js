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

async function fetchData () {
  try {
    const CryptoAPI = http.get(`v1/cryptocurrency/listings/latest`);
    const response = await CryptoAPI

    response.data.data.forEach(crypto => {
      console.log(crypto)
    })
  }
  catch (err) {
    console.error(chalk.red(err))
    console.dir(err.response, { colors: true, depth: 4 });
  }
}

fetchData()