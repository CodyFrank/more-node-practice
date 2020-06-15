const fs = require('fs')
const path = require('path')


// create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err) throw err
//     console.log('folder created')
// } )

// create and write to file 
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), "Hello World", err => {
//     if (err) throw err
//     console.log('file written too')
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), " from node.js", err => {
//         if (err) throw err
//         console.log('file appended')
//     } ) 
// })

// reads file (note this is asynchrones meaning if you run this whole file it could give you unexpected results because of this
// readfile should be used on a prexisting file not one that may still be written too or may still be created 
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })


fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'hello-world.txt'), err => {
    if(err) throw err
    console.log('file renamed')
    }
)