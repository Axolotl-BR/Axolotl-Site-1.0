/* SCROLL ANIMATION */
const reveals=document.querySelectorAll(".reveal");
const onScroll=()=>{
  reveals.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<window.innerHeight-100){
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll",onScroll);
onScroll();

/* MODAL E3 */
const modal=document.getElementById("modal");
const modalTitle=document.getElementById("modal-title");
const modalText=document.getElementById("modal-text");

document.querySelectorAll("[data-modal]").forEach(card=>{
  card.onclick=()=>{
    modalTitle.innerText=card.dataset.title;
    modalText.innerText=card.dataset.text;
    modal.classList.add("active");
  };
});

modal.onclick=()=>modal.classList.remove("active");

