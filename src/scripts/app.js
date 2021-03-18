const ejs = require('ejs')
const bodyParser = require('body-parser')
const express = require('express');
const app = express()
const port = 7000;

const render = require('./modules/render.js')

app
    .engine('.html', ejs.__express)
    .set('views', 'src/views')
    .set('view engine', 'html')
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: true}))
    .use(bodyParser.json())
    .use(express.json())
    .post('/home', render.home)
    .get('/enq/:course', render.course)
    .get('/', redirect)
    .get('/login', render.login)
    .get('*', error)

function redirect(req, res) {
    res.redirect('/login');
}

function error(req, res) {
    res.status(404).render('not-found', {
        title: '404 Not Found'
    })
}

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})