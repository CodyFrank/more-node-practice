const http = require('http')
const path = require('path')
const fs = require('fs')
const { endianness } = require('os')

const server = http.createServer((req, res) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', "index.html"), (err, data) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'content-type': 'text/html' })
    //         res.end(data)
    //     })
    // }
    // if(req.url === '/api/users'){
    //     const users = [
    //         { name: 'Bob Smith', age: 40},
    //         { name: 'John Doe', age: 30}
    //     ]
    //     res.writeHead(200, { "content-type": "application/json" })
    //     res.end(JSON.stringify(users))
    // }

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    let extName = path.extname(filePath)
    let contentType = 'text/html'
    switch(extName){
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    fs.readFile()


})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server is running... port: ${PORT}`))