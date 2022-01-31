const tl = gsap.timeline();
const elBtn = document.querySelector('.menu-burger');
const elNavbar = document.querySelector('.navbar')
const elFooterText = document.querySelector('.footer-text')


const year = new Date().getFullYear()

elFooterText.textContent = `© ${year} All rights reserved.`


tl.fromTo('.white-wrapper', {scaleX: 1}, {scaleX: 0, duration: 0.5})
.from('.blue-wrapper', {duration: 0.5, scaleX: 0},)
.from('.navbar-list__item', {duration: 0.5, y: -140, stagger: 0.1}, "-=0.2")
.from('.hero-right', {duration: 0.5, yPercent: 240, opacity: 0}, "-=0.2")
.from('.hero-left', {duration: 0.5, rotateX: 180, opacity: 0}, "-=0.2")



elBtn.addEventListener('click', () => {
  elNavbar.classList.toggle('nav-open');
})







let tl2 = gsap.timeline({
  scrollTrigger : {
  trigger: ".projects",
  start: "top center",
  }
})

tl2.from('.projects-item', {duration: 0.5, x: 300, stagger: 0.1})
.from('.projects-item-left', {duration: 0.3, x: -300, stagger: 0.1})
.from('.project-box', {duration: 0.3, y: 100, autoAlpha: 0})


let tl3 = gsap.timeline({
  scrollTrigger : {
  trigger: ".skills-list",
  start: "top bottom",
  }
})
tl3.from('.skills-item', {duration: 0.4, opacity: 0, y: 200, stagger: 0.07, rotateY: 180}, "0.4")
