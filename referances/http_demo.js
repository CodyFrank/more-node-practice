const http = require('http')

server = http.createServer((req,res) => {
    res.write("hello World")
    res.end()
})
server.listen(3000, () => console.log("listening to port 3000"))

 