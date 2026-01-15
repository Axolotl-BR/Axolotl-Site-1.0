// scroll reveal
document.querySelectorAll('.reveal').forEach(el=>{
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) el.classList.add('active');
    });
  },{threshold:.2});
  obs.observe(el);
});

// navbar hide
let last=0;
const nav=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
  const cur=window.scrollY;
  if(cur>last && cur>120) nav.style.transform='translateY(-100%)';
  else nav.style.transform='translateY(0)';
  last=cur;
});
