/* =====================
   SCROLL REVEAL GLOBAL
===================== */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const winH = window.innerHeight;

    if(top < winH - 100){
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* =====================
   NAVBAR ESCONDE
===================== */
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
  const cur = window.scrollY;
  if(!navbar) return;

  if(cur > lastScroll && cur > 120){
    navbar.style.transform = 'translateY(-100%)';
  }else{
    navbar.style.transform = 'translateY(0)';
  }
  lastScroll = cur;
});

/* =====================
   MODO APRESENTAÇÃO
===================== */
let presentation = false;

document.addEventListener('keydown', e=>{
  if(e.key.toLowerCase() === 'p'){
    presentation = !presentation;
    document.body.classList.toggle('presentation', presentation);
  }
});
