let urlmod = require('url')
let url = urlmod.parse("https://www.google.com/search?q=react+and+reactnative")
console.log("host name", url.hostname)
console.log("query string", url.query)
console.log(url.hash)
console.log(url.href)
console.log(url.protocol)
console.log(url.port)
console.log(url.search)