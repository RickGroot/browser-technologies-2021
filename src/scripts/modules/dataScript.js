const fs = require('fs');
let path = "./public/scripts/data.json";
let data = JSON.parse(fs.readFileSync(path, "utf8"));

function pushUserData(user) {
    if (!data[user.user_studentnr]) {

        data[user.user_studentnr] = {
            user_name: user.user_name,
            user_surname: user.user_surname,
            user_studentnr: user.user_studentnr,
            enq: []
        }

        fs.writeFile(path, JSON.stringify(data), (err) => {
            if (err) console.error(err)
        });
    }
}

function pushEnq(enq, user, course) {
    let key = course

    data[user].enq.push({
        [key]: {
            lecturer: enq.lecturer,
            material: enq.material,
            content: enq.content,
            learning: enq.learning,
            comments: enq.comments
        }
    })

    fs.writeFile(path, JSON.stringify(data), (err) => {
        if (err) console.error(err)
    });
}

/*
{
  lecturer: 'Koop',
  material: 'medium',
  content: 'medium',
  learning: 'good',
  comments: ''
}
*/

function getUserData(user) {
    let userData = data[user];

    return userData;
}

function getEnq(user) {
    let courses = ["PWA", "Browser-Technologies", "WAFS", "CSS-to-the-rescue", "Real-time-web", "HCD", "Meesterproef"]
    // console.log(data[user].enq)
    let userData = data[user].enq
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
    let userData = data[user].enq
    let doneEnq = [];

    for (let i = 0; i < userData.length; i++) {
        let [name] = Object.keys(userData[i]);
        doneEnq.push(name)
    }

    return doneEnq;
}

module.exports = {
    pushUserData,
    pushEnq,
    getUserData,
    getEnq,
    doneEnq
}