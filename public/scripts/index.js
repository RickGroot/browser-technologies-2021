// -------------------------------------------------------------------------------------- changes number type into range type
function changeSliders(input) {
    if (input) {
        input.type = 'range';
        input.value = 5;
        input.classList.add('slider');

        let sliderText = document.createElement('p');
        let text = document.createTextNode(input.value);

        sliderText.appendChild(text);
        input.parentNode.insertBefore(sliderText, input.nextSibling);
    }
}

// -------------------------------------------------------------------------------------- gets user login data from localstorage
function storedUser() {
    let name = localStorage.getItem("name");
    let surname = localStorage.getItem("surname");
    let number = localStorage.getItem("number");

    document.getElementsByName("user_name")[0].value = name;
    document.getElementsByName("user_surname")[0].value = surname;
    document.getElementsByName("user_studentnr")[0].value = number;
}

// -------------------------------------------------------------------------------------- pushes localstorage to enquete if there is any
async function pushEnqData(id) {
    if (localStorage.getItem(id)) {
        let data = JSON.parse(localStorage.getItem(id));
        let inputs = await getInputs();
        let comments = document.querySelector("textarea");
        let grade = document.querySelector("input[type='range']");

        for (let key of Object.keys(data)) {
            if (key === 'comments') {
                comments.innerHTML = data[key];
            }
            if (key === 'grade') {
                grade.value = data[key];
                let slider = document.querySelector(".slider");
                let sliderValue = document.querySelector(".slider + p");
                sliderValue.innerHTML = slider.value;
            }

            inputs.forEach(input => {
                if (input.value === data[key] && input.type == "radio") {
                    input.checked = true;
                } else if (input.value === data[key] && input.type == "radio") {
                    input.checked = true;
                }
            })
        }

    }
}

// -------------------------------------------------------------------------------------- stores enquete inputs to localstorage on input
async function storeEnq(id) {
    let lecturer = await getLecturer();
    let period = await getPeriod();
    let grade = document.getElementsByName("grade")[0].value;
    let material = await getMaterial();
    let content = await getContent();
    let learning = await getLearning();
    let comments = document.getElementsByName("comments")[0].value;

    let obj = {
        lecturer: lecturer,
        period: period,
        grade: grade,
        material: material,
        content: content,
        learning: learning,
        comments: comments
    }

    localStorage.setItem(id, JSON.stringify(obj));
}

// -------------------------------------------------------------------------------------- functions below get all inputs
function getInputs() {
    let inputs = document.querySelectorAll("input");
    return inputs;
}

function getLecturer() {
    let lecturers = document.querySelectorAll("input[name='lecturer']");
    for (lecturer of lecturers) {
        if (lecturer.checked) {
            return lecturer.value;
        } else {
            return lecturers;
        }
    }
}

function getPeriod() {
    let periods = document.querySelectorAll("input[name='period']");
    for (period of periods) {
        if (period.checked) {
            return period.value;
        }
    }
}

function getMaterial() {
    let materials = document.querySelectorAll("input[name='material']");
    for (material of materials) {
        if (material.checked) {
            return material.value;
        }
    }
}

function getContent() {
    let contents = document.querySelectorAll("input[name='content']");
    for (content of contents) {
        if (content.checked) {
            return content.value;
        }
    }
}

function getLearning() {
    let learnings = document.querySelectorAll("input[name='learning']");
    for (learning of learnings) {
        if (learning.checked) {
            return learning.value;
        }
    }
}

// -------------------------------------------------------------------------------------- changes slider value text
let changeValue = function () {
    let slider = document.querySelector(".slider");
    let sliderValue = document.querySelector(".slider + p");
    sliderValue.innerHTML = slider.value;
}

// -------------------------------------------------------------------------------------- stores login data
let storeInputData = function () {
    let name = document.getElementsByName("user_name")[0].value
    let surname = document.getElementsByName("user_surname")[0].value
    let number = document.getElementsByName("user_studentnr")[0].value

    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("number", number);
}

// -------------------------------------------------------------------------------------- checks if queryselector is available
if (document.querySelector) {
    let input = document.querySelector(".number input[type=number]");
    changeSliders(input);

    let slider = document.querySelector(".slider");
    if (slider) {
        slider.addEventListener('input', changeValue);
    }
} else {
    console.log("slider functionality is not supported")
}

// -------------------------------------------------------------------------------------- checks if localstorage and queryselector are available
if (localStorage && document.querySelector) {
    let loginbtn = document.getElementById('loginbtn');

    if (loginbtn) {
        storedUser();
        loginbtn.addEventListener('click', storeInputData);
    }

    let enqId = document.getElementById('tagname')
    let enq = document.getElementById('form')

    if (enqId) {
        pushEnqData(enqId.innerHTML);

        enq.addEventListener('input', () => {
            storeEnq(enqId.innerHTML);
        })
    }
} else {
    console.log("localstorage is not available")
}
if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                return registration.update();
            })
            .catch((error) => {
                // registration failed
                console.log('Registration failed with ' + error);
            });
    });
}