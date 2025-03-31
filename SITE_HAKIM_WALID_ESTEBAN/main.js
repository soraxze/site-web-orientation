let slideIndex = 0;
showSlides();

function showSlides() {
  // Récupération des éléments avec la classe "mySlides" et "dot"
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Masquer toutes les images du diaporama
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Incrémentation de l'index du diaporama
  slideIndex++;

  // Si l'index dépasse le nombre total d'images, revenir à la première image
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Masquer la classe "active" de tous les points de navigation
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  // Afficher la diapositive actuelle et ajouter la classe "active" au point de navigation correspondant
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Appel récursif de la fonction showSlides après un délai de 2000 millisecondes (2 secondes)
  setTimeout(showSlides, 2000);
}
