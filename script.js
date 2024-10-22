// Changer la couleur de fond d'un bouton quand on passe la souris dessus
var contactButton = document.querySelector(".btn-primary");

contactButton.addEventListener("mouseover", function() {
    contactButton.style.backgroundColor = "#28a745"; // Change la couleur du bouton au survol (vert)
});

contactButton.addEventListener("mouseout", function() {
    contactButton.style.backgroundColor = "#007bff"; // Remet la couleur d'origine au départ de la souris (bleu)
});

// Afficher une alerte quand l'utilisateur clique sur le bouton "Contact"
contactButton.addEventListener("click", function() {
    alert("Merci de vouloir me contacter ! Je répondrai à votre message bientôt.");
});
