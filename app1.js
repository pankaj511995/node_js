const http=require('http')
const server=http.createServer((req,res)=>{
    const url=req.url
    res.setHeader('Content-type','text/html')
    if(url==='/home'){
       res.write(`<html>
       <body> Welcome to Home page</body> </html>`)
       res.end()
    }
    if(url==='/about'){
        res.write(`<html>
        <body> Welcome to About Us page</body> </html>`)
        res.end()
     }
     if(url==='/node'){
        res.write(`<html>
        <body>Welcome to my Node Js project</body> </html>`)
        res.end()
     }
})

server.listen(4000)