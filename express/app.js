import express from 'express'
// console.log("Hello world")

const app = express() 

app.get("/",(req,res)=>{
    res.send("Welcome From Express.js")
})

app.listen(3000,()=>{
    console.log("Server is running...")
})

