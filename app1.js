const http=require('http')
const router=require('./router')
// const server=http.createServer(router.textfile)//one by one
const server=http.createServer(router)

server.listen(4000)