// ABRE E FECHA O MEU QUANDO CLICAR NO ICONE
const nav = document.querySelector("#header nav")
const toogle = document.querySelectorAll("nav .toggle")

for(const element of toogle) {
  element.addEventListener("click",function() {
    nav.classList.toggle("show")
  })
}

// QUANDO CLICAR EM UM ITEM DO MENU, ESCONDE O MEU

const links = document.querySelectorAll("nav ul li a")

for(const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})