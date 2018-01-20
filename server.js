
const express = require('express')
const app = express()
const path = require('path')

app.listen(3000, function () {
  console.log('Living Style Guide Project listening on port 3000!')
})

app.get('/styleguide', function(req, res) {
  res.sendFile(path.join(__dirname, '/styleguide/public/styleguide.html'))
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.use('/public', express.static(path.join(__dirname, '/styleguide/public')))
app.use('/images', express.static(path.join(__dirname, '/images')))
