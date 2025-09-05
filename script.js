// Menu Toggle a breakpoint

document.addEventListener('DOMContentLoaded',()=> {

  const menu = document.querySelector("#menu");
  const nav = document.querySelector(".links")


  menu.onclick = () => {

    menu.classList.toggle("bx-x");
    nav.classList.toggle("active");
  }

});

let body = document.querySelector('body');
let choice = 'lightMode';

choice === 'lightMode' ? body.classList.add('lightMode') : null;

