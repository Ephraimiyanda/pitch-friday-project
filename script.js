const option = document.querySelector(".options");
const headingLinks = document.querySelector(".quick-links");
const section = document.querySelectorAll("#firstrow section");
const sectionImg = document.querySelectorAll("img") 
const products = document.querySelectorAll(".products");
const input =document.querySelector(".nav > input");
const names = document.querySelectorAll("#firstrow h2");

//toggle header links
option.addEventListener("click", function(){
    headingLinks.classList.toggle("show");
})

for(var i=0;i<products.length;i++){
   
   
  
  for(var i=0;i<section.length;i++){
    section[i].addEventListener("click",()=>{
        const productInfo = document.querySelectorAll("#firstrow section")
        for(var i=0;i<productInfo.length;i++){
        const product= document.querySelectorAll("#firstrow section");
         const productImg = document.querySelectorAll("#firstrow section img");  
         const productName = document.querySelector("#firstrow h2");
         Array.from(product).forEach(function (produce){
               
                 produce.style.display="none"
         })   
        }    
      
})
  }
}

//plant search
for(var i=0 ; i<names.length;i++){
  input.addEventListener("keyup",()=>{  
      const productHeading = document.querySelectorAll(".products h1")
     for(var i=0;i<productHeading.length;i++){
      const searchContent = document.querySelector(".search-content");
      const plantName = document.querySelectorAll("#firstrow h2")     
      const search = document.querySelector(".nav > input");
      Array.from(plantName).forEach(function (plant){
          if(plant.innerText.toLowerCase().indexOf(search.value.toLowerCase()) != -1){ 
          }else{
              productHeading[i].style.display="none"
            plant.parentElement.parentElement.style.display="none";
          }
      }
      )   
     }    
   
  })
}