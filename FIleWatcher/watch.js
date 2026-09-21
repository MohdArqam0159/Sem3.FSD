const fs = require('fs')

fs.watch("notex.txt",(eventType,filename)=>{
    console.log("Event: ",eventType)
      console.log("Filename ",filename)
})