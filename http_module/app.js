// const fs= require("fs")  ESMODULE method to import 
import http from "http"

const server = http.createServer((req,res)=>{
    console.log("Hello")
    res.writeHead(200, {
        "Content-Type":"text/plain",
        "custom-header":"Hello"
    })
    const order ={
        orderId:123,
        ordername:"iphone"
    }
    
    res.end("Welcome from server")
})
const PORT = 3000
const ADDRESS = "127.0.0.1"
server.listen(PORT , ADDRESS , ()=>{
    console.log("Server is running...");

})