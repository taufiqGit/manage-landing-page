import './main.css';


import Swiper, {Pagination} from "swiper"

const BtnToggle = document.getElementById("Toggle"),
      NavMobile = document.getElementById("NavMobile")

BtnToggle.addEventListener('click', ()=>{
   if(NavMobile.classList.contains("hidden")){
      NavMobile.classList.remove("hidden")
   } else{
      NavMobile.classList.add("hidden")
   }
})

new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {  
    // when window width is <= 320px     
    320: {       
       slidesPerView: 1,
       spaceBetween: 10     
    },          
    // when window width is <= 480px     
    768: {       
       slidesPerView: 2,       
       spaceBetween: 20     
    },   

    // when window width is <= 640px     
    1100: {       
       slidesPerView: 3,       
       spaceBetween: 30     
    } 
 }
});


