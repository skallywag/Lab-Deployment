const express = require('express')
const path = require('path')

const app = express()

app.get('/js', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/main.js'))
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', function(req, res){
    res.sendFile(path.join(__dirname, '../client/styles.css'))
})

app.get('/css2', function(req, res){
    res.sendFile(path.join(__dirname, '../client/reset.css'))
})



const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Warped to planet ${port}`)})