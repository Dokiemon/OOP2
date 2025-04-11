const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('hello world')
})

app.get('/parental', (req, res) => {
    res.send('MÃE COVARDE E PAI COVARDE')
})

app.get('/content', (req, res) => {
    res.sendFile(__dirname + "/main/index.html")
})

app.listen(3000, () => {
    console.log(`Example app listening on port `)
  })