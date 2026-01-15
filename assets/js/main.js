/* =====================
   SCROLL REVEAL
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

  if(cur > lastScroll && cur > 120){
    navbar.style.transform = 'translateY(-100%)';
  }else{
    navbar.style.transform = 'translateY(0)';
  }
  lastScroll = cur;
});

/* =====================
   MODAL E3 (BALÕES)
===================== */
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

document.querySelectorAll('[data-modal]').forEach(card=>{
  card.addEventListener('click',()=>{
    modalTitle.innerText = card.dataset.title;
    modalText.innerText = card.dataset.text;
    modal.classList.add('active');
  });
});

modal?.addEventListener('click',()=>{
  modal.classList.remove('active');
});
