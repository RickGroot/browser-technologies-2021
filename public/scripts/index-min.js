function changeSliders(e){if(e){e.type="range",e.value=5,e.classList.add("slider");let t=document.createElement("p"),n=document.createTextNode(e.value);t.appendChild(n),e.parentNode.insertBefore(t,e.nextSibling)}}function storedUser(){let e=localStorage.getItem("name"),t=localStorage.getItem("surname"),n=localStorage.getItem("number");document.getElementsByName("user_name")[0].value=e,document.getElementsByName("user_surname")[0].value=t,document.getElementsByName("user_studentnr")[0].value=n}let changeValue=function(){let e=document.querySelector(".slider");document.querySelector(".slider + p").innerHTML=e.value},storeInputData=function(){let e=document.getElementsByName("user_name")[0].value,t=document.getElementsByName("user_surname")[0].value,n=document.getElementsByName("user_studentnr")[0].value;localStorage.setItem("name",e),localStorage.setItem("surname",t),localStorage.setItem("number",n)};if(document.querySelector){changeSliders(document.querySelector("input[type=number]"));let e=document.querySelector(".slider");e&&e.addEventListener("input",changeValue)}else console.log("slider functionality is not supported");if(localStorage&&document.querySelector){let e=document.getElementById("loginbtn");e&&(storedUser(),e.addEventListener("click",storeInputData))}else console.log("localstorage is not available");