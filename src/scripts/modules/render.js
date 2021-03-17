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
    res.render('home', {
        title: 'Mijn enquêtes',
        name: req.body.name
    })
}

module.exports = {test, course, login, home}