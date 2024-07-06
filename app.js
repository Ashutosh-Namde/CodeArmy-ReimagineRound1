gsap.from(".image h1",{
    opacity:0,
    duration:2,
    scale:4,
    scrollTrigger:{
        trigger:".image h1",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        markers:false,
        
    }
})


// script.js
const button = document.getElementById('hoverbutton1');
const button2 = document.getElementById('hoverbutton2');
const button3 = document.getElementById('hoverbutton3');
const button4 = document.getElementById('hoverbutton4');
const image = document.getElementById('image1');
let heading  = document.getElementById('h2');
let heading2  = document.getElementById('h1');
let heading3  = document.getElementById('h4');

button.addEventListener('mousemove', function() {
  image.src = 'https://static.toiimg.com/thumb/msid-91984351,width-1280,height-720,resizemode-4/91984351.jpg'; // Replace 'new-image.jpg' with your hover image URL
  heading.style.color = "white"
      heading2.style.color = "white"
       heading3.style.color = "white"
});

button.addEventListener('mouseleave', function() {
  image.src = 'https://free-3dtextureshd.com/wp-content/webpc-passthru.php?src=https://free-3dtextureshd.com/wp-content/uploads/2024/06/241.jpg&nocache=1'; // Replace 'default-image.jpg' with your default image URL
   heading.style.color = "black"
      heading2.style.color = "black"
       heading3.style.color = "black"
});
button2.addEventListener('mousemove', function() {
    image.src = 'https://assets1.ignimgs.com/2018/09/04/ps4spider-man-blogroll-01-1536034979782_160w.jpg?width=1280'; // Replace 'new-image.jpg' with your hover image URL
    heading.style.color = "white"
        heading2.style.color = "white"
         heading3.style.color = "white"
  });
  
  button2.addEventListener('mouseleave', function() {
    image.src = 'https://free-3dtextureshd.com/wp-content/webpc-passthru.php?src=https://free-3dtextureshd.com/wp-content/uploads/2024/06/241.jpg&nocache=1'; // Replace 'default-image.jpg' with your default image URL
     heading.style.color = "black"
        heading2.style.color = "black"
         heading3.style.color = "black"
  });
  button3.addEventListener('mousemove', function() {
    image.src = "https://assetsio.gnwcdn.com/Marvel's-Spider-Man-2-(1).jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"; // Replace 'new-image.jpg' with your hover image URL
    heading.style.color = "white"
        heading2.style.color = "white"
         heading3.style.color = "white"
  });
  
  button3.addEventListener('mouseleave', function() {
    image.src = 'https://free-3dtextureshd.com/wp-content/webpc-passthru.php?src=https://free-3dtextureshd.com/wp-content/uploads/2024/06/241.jpg&nocache=1'; // Replace 'default-image.jpg' with your default image URL
     heading.style.color = "black"
        heading2.style.color = "black"
         heading3.style.color = "black"
  });
  button4.addEventListener('mousemove', function() {
    image.src = "https://i.pinimg.com/564x/bb/1c/59/bb1c59d84f4ea0c123e30019b3e4bc07.jpg"; // Replace 'new-image.jpg' with your hover image URL
    heading.style.color = "white"
        heading2.style.color = "white"
         heading3.style.color = "white"
  });
  
  button4.addEventListener('mouseleave', function() {
    image.src = 'https://free-3dtextureshd.com/wp-content/webpc-passthru.php?src=https://free-3dtextureshd.com/wp-content/uploads/2024/06/241.jpg&nocache=1'; // Replace 'default-image.jpg' with your default image URL
     heading.style.color = "black"
        heading2.style.color = "black"
         heading3.style.color = "black"
  });
  
 gsap.to(".image .image1",{
    opacity:0,
    duration: 1,
    scale:4
 })



 
let main = document.querySelector(".main")
let navitem = document.querySelector(".nav-links")
let cusor = document.querySelector(".cursor")
let menu = document.querySelector("#menu")
let cross = document.querySelector("#cross")
let tex = document.querySelector("#tex")

main.addEventListener("mousemove",(dets)=>{
   gsap.to(cusor,{
    x:dets.x,
    y:dets.y,
    ease:"power1",
    duration:1,
    
   })
})

let count = 0


menu.addEventListener("click", () => {
   if (count === 0) {
       gsap.fromTo(navitem, {
           y: "-100%",
           display: "flex"
       }, {
           y: "0%",
           duration: 1.5,
           ease: "power1.inOut"
       });
       count = 1;
   }
});

cross.addEventListener("click", () => {
   if (count === 1) {
       gsap.to(navitem, {
           y: "-100%",
           duration: 1.5,
           ease: "power1.inOut",
           onComplete: () => {
               navitem.style.display = "none";
           }
       });
       count = 0;
   }
});




let tl = gsap.timeline();

tl.from(".loader h1",{
    x:200,
    duration:0.5,
    stagger:0.5,
    opacity:0
})

tl.to(".loader h1",{
    opacity:0,
    x:-200,
    stagger:0.5,
    duration:0.5,
})

tl.to(".loader",{
    opacity:0
})
tl.to(".loader",{
    display:"none"
})


tl.from(".heading h1 span",{
    y:100,
    duration:0.5,
    stagger:0.5,
    opacity:0,
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5 ,
      loop:true,
      autoplay: {
        delay: 3,
        disableOnInteraction: false,
      },
      speed:3000,
  });
 
