const express = require('express')
const app = express()
const port = 3000

app.get('/helloworld', (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`hello-world app listening on port ${port}`)
})
