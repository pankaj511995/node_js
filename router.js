const fs=require('fs')

const router=(req,res)=>{
    const url=req.url
    const method=req.method
    console.log(method)
    res.setHeader('Content-type','text/html')
    if(url==='/'){
      const mess=fs.readFileSync('message.txt').toString()
       res.write(`<html>
        
       <body><div>${mess}</div> 
       <form action="/message" method="POST">
       <input type="text name="message">
       <button type="submit">Send</button>
       </form> </html>`)
       res.end() 
    }
    if(url==='/message' && method==='POST'){
    
      const body=[]
      req.on('data',chunk=>{
        body.push(chunk)});
       
     return req.on('end',()=>{
    
         const bufferbody=Buffer.concat(body).toString()
         const text=bufferbody.split('=')[1]
         fs.writeFile('message.txt',text,err=>{
            res.setHeader(302) 
            res.setHeader('Location','/')
            res.end()
         })
      })
   }
 }
 module.exports=router


 // module.exports={
 //     expo : router,
 //     textfile:'i am text'
 // }
//  module.exports.expo=router;
//  module.exports.textfile='hi'  