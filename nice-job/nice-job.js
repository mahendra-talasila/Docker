const express = require('express')
const app = express()
const port = 3000

app.get('/nicejob', (req, res) => {
  res.send("This is  nice-job!")
})

app.listen(port, () => {
  console.log(`mahendra app listening on port ${port}`)
})
