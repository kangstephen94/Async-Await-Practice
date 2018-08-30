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

    const promise = new Promise (resolve => {
      setTimeout(function () {
        resolve(http.get(
          `/repos/kangstephen94/mICO/comments`
        ))
      }, 5000)
    })
    // const comments = setTimeout(function () {http.get(
    //   `/repos/kangstephen94/mICO/comments`
    // )}, 5000)

    const comments = promise

    // const pulls = setTimeout(function () {http.get(
    //   '/repos/kangstephen94/mICO/pulls/comments'
    // )}, 6000)
    
    console.log(await comments)
    // console.log(await pulls)

    //Testing Sequential Requests


    




  }
  catch (err) {
    console.error(chalk.red(err))
    console.dir(err.response, { colors: true, depth: 4 })
  }
}

fetchData()