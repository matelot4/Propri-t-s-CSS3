const accordeon = document.querySelectorAll(".accordeon");
const lettre = document.querySelectorAll(".lettre");
const accordeonsTexte = document.querySelectorAll(".corps");
const barreNavigation = document.querySelector("nav");
const sticky = barreNavigation.offsetTop;
const boutonScroll = document.getElementById("bouton");

function initialisationDesCartes() {
  console.log("blablalba");
}

for (let index = 0; index < accordeonsTexte.length; index++) {
  
  function ouvrirCarte() {
    accordeonsTexte[index].classList.toggle("ferme");
    
    console.log(accordeonsTexte[index].classList.contains('ferme'))
    if (accordeonsTexte[index].classList.contains("ferme")) {

      accordeonsTexte[index].setAttribute('aria-expanded', false);
    } else {
      accordeonsTexte[index].setAttribute('aria-expanded', true);
    }
    
  }
  
  lettre[index].addEventListener("click", ouvrirCarte);

}


window.onscroll = function () {
  retournerEnHaut();
  rendreNavSticky();
};

boutonScroll.addEventListener("click", scrollToTop);
function scrollToTop() {
  window.scrollTo(0, 0);
}

function rendreNavSticky() {
  if (window.pageYOffset >= sticky) {
    barreNavigation.classList.add("sticky");
  } else {
    barreNavigation.classList.remove("sticky");
  }
}

function retournerEnHaut() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    boutonScroll.style.display = "block";
  } else {
    boutonScroll.style.display = "none";
  }
}
