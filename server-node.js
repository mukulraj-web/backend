const http =require('http')
require('dotenv').config()

// const hostname = '127.0.0.1'
const port =  process.env.PORT||3000

const server =  http.createServer((req,res)=>{
   if (req.url === "/") {
     res.statusCode = 200
     res.setHeader("Content-Type","text/plain")
     res.end("hello hot coffee")
   }
   else if (req.url === "/login") {
    res.statusCode = 200
    res.setHeader("Content-Type","text/plain")
    res.end("hello from login page")
   } else {
    res.statusCode = 404
    res.setHeader("Content-Type","text/plain")
    res.end("404 not founda")
   }
})
server.listen(port, ()=>{
    console.log(`server is listening at http://:${port}`)
})