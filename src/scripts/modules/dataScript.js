const fs = require('fs');
let path = "./public/scripts/data.json";
let data = JSON.parse(fs.readFileSync(path, "utf8"));

function getUser(user) {
    if (!data[user.user_studentnr]) data[user.user_studentnr] = {
        user_name: user.user_name,
        user_surname: user.user_surname,
        enq: []
    }

    if (data[user.user_studentnr]) data[user.user_studentnr] = {
        user_name: user.user_name,
        user_surname: user.user_surname,
        enq: [{
            "PWA": {
                "test": "true"
            }
        }, {
            "two": {
                "test": "also true"
            }
        }]
    }

    fs.writeFile(path, JSON.stringify(data), (err) => {
        if (err) console.error(err)
    });

    let userData = data[user.user_studentnr];

    return userData;
}

function getEnq(user) {
    let courses = ["PWA", "Browser-Technologies", "WAFS", "CSS-to-the-resque", "Real-time-web", "HCD", "Meesterproef"]
    let userData = data[user.user_studentnr].enq
    let doneEnq = [];

    for (let i = 0; i < userData.length; i++) {
        let [name] = Object.keys(userData[i]);
        doneEnq.push(name)
    }

    for (let i = 0; i < courses.length; i++) {
        for (let j = 0; j < doneEnq.length; j++) {
            if (courses[i] === doneEnq[j]) {
                courses.splice(i, 1);
            }
        }
    }

    return courses;
}

function doneEnq(user) {
    let userData = data[user.user_studentnr].enq
    let doneEnq = [];

    for (let i = 0; i < userData.length; i++) {
        let [name] = Object.keys(userData[i]);
        doneEnq.push(name)
    }

    return doneEnq;
}

module.exports = {
    getUser,
    getEnq,
    doneEnq
}