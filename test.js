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

async function fetchData () {
  try {

    // const commitComments = http.get(
    //   `/repos/npm/cli/pulls/comments`,
    // )

    var pulls = requestAsync(`/repos/npm/cli/pulls/comments`);
    var commits = requestAsync('/repos/npm/cli/comments')
    var issues = requestAsync('repos/npm/cli/issues/comments')

    let results = []
    results = results.concat(await pulls, await commits, await issues)
    console.log(results)

  }
  catch (err) {
    console.error(chalk.red(err))
    console.dir(err.response, { colors: true, depth: 4 })
  }
}

fetchData()