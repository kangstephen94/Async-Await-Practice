const axios = require("axios");
const chalk = require("chalk");

const http = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token c4dbf02332415d52f8ce8e40f400e40fdca004e6`,
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