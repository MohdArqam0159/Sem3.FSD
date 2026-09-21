import http from 'http'
import fs from 'fs'

const data = fs.readFileSync("./index.html")

const server =http.createServer((req,res)=>{
    // res.end("Welcome from server")
    if(req.url == "/"){
        res.end("Home Page")
    }else if(req.url=="/contact"){
        res.writeHead(200,{
            "Content-Type":"text/plain"
        })
        res.end("Contact Page")
    }else if(req.url=="/Projects"){
          res.writeHead(200,{
            "Content-Type":"text/plain"
        })
        
        res.end(config)
    }else {
          res.writeHead(200,{
            "Content-Type":"text/plain"
        })
        res.end("Page not found")
    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log("Serve is Running...");
})