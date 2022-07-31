const mobile_nav =document.querySelector(".mobile-navbar-btn");
const nav_header =document.querySelector(".header");

const toggleNavBar = () => {

    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click",()=>toggleNavBar());



document.querySelector(".insta").onclick=function(){
    window.open('https://www.instagram.com/sahanilxm/','_blank')
};

document.querySelector(".linkedin").onclick=function(){
    window.open('https://www.linkedin.com/in/laxmi-kumar-sahani-a2bbab157/','_blank')
};

document.querySelector(".facebook").onclick=function(){
    window.open('https://www.facebook.com/laxmikumar.sahani.96/','_blank')
};

document.querySelector(".twitter").onclick=function(){
    window.open('https://twitter.com/sahanilxm','_blank')
};

