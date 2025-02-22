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
    .post('/login-redirect', render.loginPost)
    .post('/:id/enq-redirect/:course', render.enqPost)
    .get('/:id/home', render.home)
    .get('/:id/enq/:course', render.course)
    .get('/:id/view/:course', render.review)
    .get('/', redirect)
    .get('/login', render.login)
    .get('/offline', offline)
    .get('*', error)

function redirect(req, res) {
    res.redirect('/login');
}

function offline(req, res) {
    res.render('offline', {
        title: "Offline"
    })
}

function error(req, res) {
    res.status(404).render('not-found', {
        title: '404 Not Found'
    })
}

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})