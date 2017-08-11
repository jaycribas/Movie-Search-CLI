const cheerio = require('cheerio')
const http = require('http')

const query = process.argv[2]

searchImdb(query)

function searchImdb(searchTerm){
  http.get(
    `http://www.imdb.com/find?ref_=nv_sr_fn&q=${searchTerm}&s=all`,
    response => {
      let body = ''

      response.on('data', data => body += data)

      response.on('end', () => {
        console.log("body (╯°□°）╯︵ ┻━┻", body)
      })
    }
  )
}
