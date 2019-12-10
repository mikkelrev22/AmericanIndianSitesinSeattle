const express = require('express')
const app = express()
const PORT = 4444

app.use(express.static(__dirname + '/../client/dist'))

app.listen(PORT, ()=>{
  console.log(`Server is now listening on PORT ${PORT}`)
})