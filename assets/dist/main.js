var swiper=new Swiper(".header_swiper",{spaceBetween:30,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),mySwiper=new Swiper(".gallery-swiper",{speed:1e3,autoplay:{delay:3e3},effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:80,depth:200,modifier:1,slideShadows:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},initialSlide:3});swiper=new Swiper(".client-swiper",{slidesPerView:2,spaceBetween:30,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},990:{slidesPerView:5,spaceBetween:60},1400:{slidesPerView:6,spaceBetween:60}},autoplay:{delay:2500,disableOnInteraction:!1},loop:!0});$(window).on("scroll",(function(){$(window).scrollTop()>200?$("#navbar").addClass("sticky"):$("#navbar").removeClass("sticky")}));const openBtn=document.querySelector(".open-btn"),nav_list=document.querySelector(".navigation__list"),overlay=document.querySelector(".overlay"),navContact=document.querySelector(".nav-contact");function mobileMenu(){openBtn.classList.toggle("active"),nav_list.classList.toggle("active"),overlay.classList.toggle("hidden"),navContact.classList.toggle("hidden")}openBtn.addEventListener("click",mobileMenu),overlay.addEventListener("click",mobileMenu);