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

function storedUser() {
    let name = localStorage.getItem("name");
    let surname = localStorage.getItem("surname");
    let number = localStorage.getItem("number");

    document.getElementsByName("user_name")[0].value = name;
    document.getElementsByName("user_surname")[0].value = surname;
    document.getElementsByName("user_studentnr")[0].value = number;
}

let changeValue = function () {
    let slider = document.querySelector(".slider");
    let sliderValue = document.querySelector(".slider + p");
    sliderValue.innerHTML = slider.value;
}

let storeInputData = function () {
    let name = document.getElementsByName("user_name")[0].value
    let surname = document.getElementsByName("user_surname")[0].value
    let number = document.getElementsByName("user_studentnr")[0].value

    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("number", number);
}

if (document.querySelector) {
    let input = document.querySelector("input[type=number]");
    changeSliders(input);

    let slider = document.querySelector(".slider");
    if (slider) {
        slider.addEventListener('input', changeValue);
    }
} else {
    console.log("slider functionality is not supported")
}

if (localStorage && document.querySelector) {
    let loginbtn = document.getElementById('loginbtn');

    if (loginbtn) {
        storedUser();
        loginbtn.addEventListener('click', storeInputData);
    }
} else {
    console.log("localstorage is not available")
}