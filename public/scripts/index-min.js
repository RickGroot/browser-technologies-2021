function changeSliders(e){if(e){e.type="range",e.value=5,e.classList.add("slider");let t=document.createElement("p"),n=document.createTextNode(e.value);t.appendChild(n),e.parentNode.insertBefore(t,e.nextSibling)}}function storedUser(){let e=localStorage.getItem("name"),t=localStorage.getItem("surname"),n=localStorage.getItem("number");document.getElementsByName("user_name")[0].value=e,document.getElementsByName("user_surname")[0].value=t,document.getElementsByName("user_studentnr")[0].value=n}async function pushEnqData(e){if(localStorage.getItem(e)){let t=JSON.parse(localStorage.getItem(e)),n=await getInputs(),r=document.querySelector("textarea"),a=document.querySelector("input[type='range']");for(let e of Object.keys(t)){if("comments"===e&&(r.innerHTML=t[e]),"grade"===e){a.value=t[e];let n=document.querySelector(".slider");document.querySelector(".slider + p").innerHTML=n.value}n.forEach(n=>{n.value===t[e]&&"radio"==n.type?n.checked=!0:n.value===t[e]&&"radio"==n.type&&(n.checked=!0)})}}}async function storeEnq(e){let t={lecturer:await getLecturer(),period:await getPeriod(),grade:document.getElementsByName("grade")[0].value,material:await getMaterial(),content:await getContent(),learning:await getLearning(),comments:document.getElementsByName("comments")[0].value};localStorage.setItem(e,JSON.stringify(t))}function getInputs(){return document.querySelectorAll("input")}function getLecturer(){let e=document.querySelectorAll("input[name='lecturer']");for(lecturer of e)return lecturer.checked?lecturer.value:e}function getPeriod(){let e=document.querySelectorAll("input[name='period']");for(period of e)if(period.checked)return period.value}function getMaterial(){let e=document.querySelectorAll("input[name='material']");for(material of e)if(material.checked)return material.value}function getContent(){let e=document.querySelectorAll("input[name='content']");for(content of e)if(content.checked)return content.value}function getLearning(){let e=document.querySelectorAll("input[name='learning']");for(learning of e)if(learning.checked)return learning.value}let changeValue=function(){let e=document.querySelector(".slider");document.querySelector(".slider + p").innerHTML=e.value},storeInputData=function(){let e=document.getElementsByName("user_name")[0].value,t=document.getElementsByName("user_surname")[0].value,n=document.getElementsByName("user_studentnr")[0].value;localStorage.setItem("name",e),localStorage.setItem("surname",t),localStorage.setItem("number",n)};if(document.querySelector){changeSliders(document.querySelector(".number input[type=number]"));let e=document.querySelector(".slider");e&&e.addEventListener("input",changeValue)}else console.log("slider functionality is not supported");if(localStorage&&document.querySelector){let e=document.getElementById("loginbtn");e&&(storedUser(),e.addEventListener("click",storeInputData));let t=document.getElementById("tagname"),n=document.getElementById("form");t&&(pushEnqData(t.innerHTML),n.addEventListener("input",()=>{storeEnq(t.innerHTML)}))}else console.log("localstorage is not available");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>e.update()).catch(e=>{console.log("Registration failed with "+e)})});