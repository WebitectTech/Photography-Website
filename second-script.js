window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', 
    window.scrollY > 0);
});

const nav = document.querySelector(".nav_links");
const openNavbtn = document.querySelector("#nav_toggle-open");
const closeNavbtn = document.querySelector("#nav_toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  openNavbtn.style.display = "none";
  closeNavbtn.style.display = "inline-block"
}

const closeNav = () => {
  nav.style.display = "none";
  closeNavbtn.style.display = "none";
  openNavbtn.style.display = "inline-block";
}

openNavbtn.addEventListener('click', openNav);
closeNavbtn.addEventListener('click', closeNav);