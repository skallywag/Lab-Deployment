const express = require('express')
const path = require('path')

const app = express()

app.get('/js', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/main.js'))
})


const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Warped to planet ${port}`)})