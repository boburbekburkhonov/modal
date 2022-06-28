const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function open(){
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden")
}

function close() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

showModal.addEventListener("click", open);

closeModalBtn.addEventListener("click", close);

overlay.addEventListener("click", close);

document.addEventListener("keydown", (evt) => {
  if(evt.keyCode === 27){
    if(!modal.classList.contains("hidden")){
      close()
    }
  }
})