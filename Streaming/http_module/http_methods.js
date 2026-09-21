const http =require('http')

const server =http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==='/'){
        res.end("Home Page")
    }
    else if(req.method==="POST"){
        res.end("Object Added")
    }else{
        res.end("Page not found")
    }
})
server.listen(3000,'127.0.0.1',()=>{
    console.log("Server is running...")
})