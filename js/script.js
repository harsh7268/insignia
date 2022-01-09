let featuresIcon1 = document.getElementById('features-icon-1');
let featuresIcon2 = document.getElementById('features-icon-2');
let featuresContent = document.getElementById('features-content');
let a=0,b=0;
featuresIcon2.addEventListener('click', () =>{
    if(a<5){
    ++a;
    b=a*100 - a*3;
    
 featuresContent.style.transform = `translateX(-${b}%)`;
 featuresContent.classList.add('forward');
    }
})
featuresIcon1.addEventListener('click', () =>{
    if(a>0){
    --a;
    b=a*100 ;
   
    featuresContent.style.transform = `translateX(-${b}%)`;
    featuresContent.classList.add('forward');
    }
  })
  var swiper = new Swiper(".rtestinomials-content", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoint:{
        640:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024:{
            slidesPerview:3,
        },
    },
});

let menuBtn = document.getElementById('menu-btn');
let menuBar = document.querySelector('#menu-bar');
menuBtn.addEventListener('click', (e) =>{
    e.preventDefault();
  menuBtn.classList.toggle('fa-times');
  menuBar.classList.toggle('active');
});
let container = document.querySelector('.container');
container.addEventListener('click', () =>{
     menuBar.classList.remove('active');
     menuBtn.classList.remove('fa-times');
});

window.onscroll = () =>{

    menuBar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}
