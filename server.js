const express = require('express')
// Create an instance of the express framework that can be used to define functionality of the server
const app = express()
// Where should the server listen for requests?
const port = 3000

// Middleware, the server will send back the files contained within the 'public' folder
// app.use(express.static('public'))

// the default route, send a success response (200)
// the middleware above will send back the files
// app.get('/', (req, res) => {
//   res.send(200);
// })

// Give instruction to the server to run and wait for requests
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})