const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  const h = window.innerHeight * 0.85;
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < h){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
