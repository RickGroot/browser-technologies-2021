const courseData = require('./courseData.js');
const dataScript = require('./dataScript.js');

async function course(req, res) {
    let course = await courseData(req.params.course)

    res.render('list', {
        title: 'Enquête' + req.params.course,
        course: req.params.course,
        data: course
    })
}

function login(req, res) {
    res.render('login', {
        title: 'Enquête login'
    })
}

async function home(req, res) {
    let user = req.body
    const userData = await dataScript.getUser(user)
    const make = await dataScript.getEnq(user)
    const done = await dataScript.doneEnq(user)

    res.render('home', {
        title: 'Mijn enquêtes',
        name: userData.user_name + ' ' + userData.user_surname,
        make: make,
        done: done
    })
}

module.exports = {
    course,
    login,
    home
}