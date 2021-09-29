'use strict';


const hamburger = document.querySelector('.nav__hamburger');

const overlay =document.querySelector('.overlay');
const ulMobile =document.querySelector('.nav__ul-mobile');

document.querySelector('body').addEventListener("click", e =>{
    console.log(e.target);
    if(e.target.closest('div') === hamburger){
        overlay.style.display = getComputedStyle(overlay).display === "none" ? "block" : "none";
        
    }else if(e.target === overlay){
        overlay.style.display = getComputedStyle(overlay).display === "none" ? "block" : "none";

    }


})








let slideIndex = 1;
showSlides(slideIndex)

function currentSlides(n){
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__item");
    let dots = document.querySelectorAll(".slider__button-radio label");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";

}


