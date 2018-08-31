const axios = require("axios");
const chalk = require("chalk");
const config = require('./config')

const http = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${config.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
})

function requestAsync(url) {
  return new Promise(function (resolve, reject) {
    http.get(url)
      .then(response => {
        resolve(response.data)
      })
    })
  }

  function doSomething() {
    return http.get('/repos/npm/cli/pulls/comments')
  }
  
  function manipulateData (response) {
    let result = []
    response.data.forEach (data => {
      result = result.concat(data)
    })
  }

async function fetchData () {
  try {

    const a = doSomething()
    const result = manipulateData(await a)


    console.log(result)

  }
  catch (err) {
    console.error(chalk.red(err))
  }
}

fetchData()