const fs = require('fs')
let path = "./public/scripts/data.json"
let data = JSON.parse(fs.readFileSync(path, "utf8"))

function test(req, res) {
    res.render('home', {
        name: 'Rick',
        title: 'Mijn enquêtes'
    })
}

function course(req, res) {
    res.render('list', {
        title: 'Enquête' + req.params.course,
        course: req.params.course
    })
}

function login(req, res) {
    res.render('login', {
        title: 'Enquête login'
    })
}

function home(req, res) {
    console.log(req.body)
    let user = req.body

    if (data[user.user_studentnr]) {
        console.log('hi')
    } else {
        let newUser = {
            user_name: user.user_name,
            user_surname: user.user_surname,
            user_studentnr: user.user_studentnr,
            enq: []
        }
        let json = JSON.stringify(newUser)
        fs.writeFile(path, json, "utf8", callback)
    }
    
    res.render('home', {
        title: 'Mijn enquêtes',
        name: user.user_name + ' ' + user.user_surname
    })
}

module.exports = {test, course, login, home}