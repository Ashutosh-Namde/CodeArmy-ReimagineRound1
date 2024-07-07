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
  image.src = "https://gameranx.com/wp-content/uploads/2018/09/Spider-Man-4K-Wallpaper-2.jpg"; // Replace 'new-image.jpg' with your hover image URL
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
  image.src = "https://wallpapers.com/images/hd/spider-man-vector-art-4k-7gw8j1lhg6kng2n3.jpg"; // Replace 'new-image.jpg' with your hover image URL
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

// ------------------------------------

var tl2 = gsap.timeline({
  repeat:-1
});

tl2.to(".imagecontainer",{
  ease: Expo.easeInOut,
  duration:2,
  width:"100%",
  stagger:2
},'a')
.to(".text h1",{

  ease: Expo.easeInOut,
  stagger:2,
  top:0
},'a')
.to(".text h1",{
  delay:2,
  ease: Expo.easeInOut,
  stagger:2,
  top:0,
  top:"-100%"
},'a')

.to(".text2 h4",{

  ease: Expo.easeInOut,
  stagger:2,
  top:0
},'a')
.to(".text2 h4",{
  delay:2,
  ease: Expo.easeInOut,
  stagger:2,
  top:0,
  top:"-100%"
},'a')


var tl3 = gsap.timeline();

tl3.from(".footer-nav .footer-right", {
x: -200,
duration: 0.5,
ease: "poweri.out",

opacity: 0,
});
tl3.from(".footer-nav .footer-left", {
x: 200,
duration: 0.5,
ease: "poweri.out",

opacity: 0,
});
tl3.from(".end .logo", {
x: 200,
duration: 0.5,
ease: "poweri.out",

opacity: 0,
});
tl3.from(".end a", {
x: 200,
duration: 0.5,
ease: "poweri.out",
stagger: 1,
opacity: 0,
});
tl3.from(".end .smlogo", {
x: 200,
duration: 0.5,
ease: "poweri.out",
stagger: 1,
opacity: 0,
});
tl3.from(".end h1", {
x: 200,
duration: 0.5,
ease: "poweri.out",
stagger: 1,
opacity: 0,
});
tl3.from(".end .ico", {
x: 200,
duration: 0.5,
ease: "poweri.out",
stagger: 1,
opacity: 0,
});
tl3.from(".end h5", {
x: 200,
duration: 0.5,
ease: "poweri.out",
stagger: 1,
opacity: 0,
});