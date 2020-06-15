const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// serialized url
console.log(myUrl.href)
console.log(myUrl.toString())

// host or root domain
console.log(myUrl.host)

// hostname
console.log(myUrl.hostname)

// note hostname will not grt the port where as hostname does


// path name
console.log(myUrl.pathname)

// serialized quary
console.log(myUrl.search)

// params object
console.log(myUrl.searchParams)

// add params dynamically
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// loop params
myUrl.searchParams.forEach( (v, k) => console.log(`${k}, ${v}`))