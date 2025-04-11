const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('hello world')
})

app.get('/parental', (req, res) => {
    res.send('MÃE COVARDE E PAI COVARDE')
})
const PORT= process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on port `)
  })