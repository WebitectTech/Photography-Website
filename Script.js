window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', 
    window.scrollY > 0);
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      599: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 60
      }

    }
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

const outdoorSessionBtn = document.querySelector("#outdoor");
const studioSessionBtn = document.querySelector("#studio");
const maternityBtn = document.querySelector("#maternity");

outdoorSessionBtn.addEventListener('click', () => {
  const outdoorSession = document.querySelector("#outdoor-sessions");
  const dropArrow = document.querySelector(".uil-arrow-circle-down");
  const closeArrow = document.querySelector(".uil-arrow-circle-up");

  if (dropArrow.className === ".uil-arrow-circle-down") {
    dropArrow.classList.remove("uil-arrow-circle-down");
    dropArrow.classList.add("uil-arrow-circle-up");
    dropArrow.style.display = "block";
  } else if (dropArrow.classList === ".uil-arrow-circle-up") {
    dropArrow.classList.remove("uil-arrow-circle-up");
    dropArrow.classList.add("uil-arrow-circle-up");
  }

  if (outdoorSession.innerHTML === "") {
    outdoorSession.innerHTML = `
      <dd>Single Session: <i class="uil uil-dollar-alt"></i>200</dd>
      <dd>Family & Group Session: <i class="uil uil-dollar-alt"></i>300</dd>
      <dd>Video Promo <i class="uil uil-video"></i>: <i class="uil uil-dollar-alt"></i>150</dd>
    `;
  } else if (outdoorSession.innerHTML.length > 1) {
    outdoorSession.innerHTML = "";
  }
});

studioSessionBtn.addEventListener('click', () => {
  const studioSession = document.querySelector("#studio-sessions");

  if (studioSession.innerHTML === "") {
    studioSession.innerHTML = `
      <dd>Single Session: <i class="uil uil-dollar-alt"></i>300</dd>
      <dd>Family & Group Session: <i class="uil uil-dollar-alt"></i>350</dd>
      <dd>Weddings: <i class="uil uil-dollar-alt"></i>1000</dd>
    `;
  } else if (studioSession.innerHTML.length > 1) {
      studioSession.innerHTML = "";
  }
});

maternityBtn.addEventListener('click', () => {
  const maternity  = document.querySelector("#maternity-photos");

  if (maternity.innerHTML === "") {
    maternity.innerHTML = `
      <dd>Outdoor Session: <i class="uil uil-dollar-alt"></i>200</dd>
      <dd>Studio Session: <i class="uil uil-dollar-alt"></i>300</dd>
    `;
  } else if (maternity.innerHTML.length > 1) {
    maternity.innerHTML = "";
  }
});








