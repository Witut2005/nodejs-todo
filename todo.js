const express = require('express')
const hbs = require('hbs')
const app = express()
const app_port = 4321

app.set('view engine', 'hbs')

app.use(express.urlencoded({
    extended: true
}))


app.get('/', (req, res) => {
    res.render('todo', { var: 'aha' })
})

app.post('/submit-task', (req, res) => {
    console.log('Task Added')
})


app.listen(app_port)