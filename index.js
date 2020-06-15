const Logger = require('./logger')
const fs = require('fs')
const path = require('path')


const logLocation = path.join(__dirname, 'logs.txt')

const logger = new Logger()

const time = new Date()


logger.on('message', (data) => {
    // console.log(`called listener`, data)
    fs.appendFile(logLocation, 
        `${time.toString()} ${data.id} ${data.msg}\n`, err => {
            if (err) throw err
            console.log("data logged to logs")
        })

})

logger.log("hello World")
logger.log("another log")

