// typing Animation****************************
var typed = new Typed(".typing", {
    strings:["Web Developer","Competitive Coder"],
    typeSpeed:100,
    backSpeed:30,
    loop:true
})

var auto = new Typed(".auto-type", {
    strings:["{Web Developer}","{Competitive Coder}"],
    typeSpeed:100,
    backSpeed:30,
    loop:true
})

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}