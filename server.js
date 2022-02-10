const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  if(req.method === 'DELETE' && req.query['_cleanup']){
    const db = router.db
    db.set('books', []).write()
    res.sendStatus(204)
  } 
  // else{
  //   next()
  // }
  console.log('req.method: ', req.method)
  const db = router.db
  if(req.method === 'GET'){
    db.get('books')
  }
  next()
})

server.use(middlewares)

server.use(router)
server.listen(9000, () => {
  console.log('JSON Server is running')
})