let appbtn=document.getElementById('app-btn');
console.log(appbtn)
appbtn.addEventListener('click',show);
let box=document.getElementById('app-box');
console.log(box)
function show()
{
    console.log("btn");
    box.classList.add("show");
    box.classList.remove("hide");
}
let closebtn=document.getElementById('app-close');
closebtn.addEventListener('click',hide);
function hide()
{
    console.log("btn2");
    box.classList.add("hide");
    box.classList.remove("show")
}
