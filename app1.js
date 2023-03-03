const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    console.log(method)
    res.setHeader('Content-type','text/html')
    if(url==='/'){
      const mess=fs.readFileSync('message.txt').toString()
       res.write(`<html>
        
       <body><div>${mess}</div> 
       <form action="/message" method="POST">
       <input type="text name="messages">
       <button type="submit">Send</button>
       </form> </html>`)
       res.end()
    }
    if(url==='/message' && method==='POST'){
    
      const body=[]
      req.on('data',(chunk)=>body.push(chunk));
       
     return req.on('end',()=>{
        
         const bufferbody=Buffer.concat(body).toString()
         const message=bufferbody.split('=')[1]
         fs.writeFile('message.txt',message,err=>{
            res.setHeader(302)
            res.setHeader('Location','/')
            res.end()
         })
      })
   }
 })

server.listen(4000)