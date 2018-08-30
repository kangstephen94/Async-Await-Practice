const axios = require("axios");
const chalk = require("chalk");
const config = require('./config')

const http = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${config.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
})

async function fetchData () {
  try {
    // Github API
    // const comments = http.get(
    //   `/repos/kangstephen94/mICO/comments`
    // )
    // const pulls = http.get(
    //   '/repos/kangstephen94/mICO/pulls/comments'
    // )

    // console.log(await comments)
    // console.log(await pulls)

    //Testing Sequential Requests

    const slow = 
    
  }
  catch (err) {
    console.error(chalk.red(err))
    console.dir(err.response, { colors: true, depth: 4 })
  }
}

fetchData()