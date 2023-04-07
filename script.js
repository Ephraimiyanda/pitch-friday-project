const option = document.querySelector(".options");
const headingLinks = document.querySelector(".quick-links");

option.addEventListener("click", function(){
    headingLinks.classList.toggle("show");
})