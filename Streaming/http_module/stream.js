import fs from 'fs'

const readStream = fs.createReadStream("intro.txt",{encoding:"utf8", highWaterMark:10})

// readStream.on("data",(chunk)=>{
//     console.log("Data recived")
//     console.log("Data: ",chunk);
// })


    const writeStream = fs.createWriteStream("output.txt")
    // writeStream.write("Hello")
    readStream.pipe(writeStream)