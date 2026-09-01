import { log } from 'console';
import * as fs from 'fs'
import process from  'process'
// setTimeout(()=>{
//     console.log("SetTime Out");
// })

fs.readfile("intro.txt","utf8",(err,data)=>{
    setTimeout(()=>{
        console.log("setTimeout inside fs");
    })
    console.log("File data read completed");
},0)
setImmediate(()=>{
    console.log("setImmediate inside fs");
})
console.log("File data read completed")

// setInterval(()=>{
//     console.log("set interval");
// },1000)

// setImmediate(()=>{
//     console.log("set immediate")
// });
process.nextTrick(()=>{
    console.log("nextTrick")
})