// ABRE E FECHA O MEU QUANDO CLICAR NO ICONE
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toggle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// QUANDO CLICAR EM UM ITEM DO MENU, ESCONDE O MEU

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// ScrollReveal: Mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header,#testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
`,
  { interval: 100 }
)

// Botao voltar para o topo
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// WHEN SCROLL
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
