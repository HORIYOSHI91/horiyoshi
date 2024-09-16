// Fonction pour entrer sur le site depuis la page de bienvenue
function enterSite() {
    // Masquer l'écran de bienvenue
    document.getElementById('welcome-screen').style.display = 'none';

    // Afficher le contenu principal
    document.getElementById('main-content').classList.remove('hidden');
}

// Fonction pour afficher ou masquer les ingrédients
function afficherIngredients(item) {
    const ingredientElement = document.getElementById(item + '-ingredients');
    if (ingredientElement.classList.contains('hidden')) {
        ingredientElement.classList.remove('hidden');
    } else {
        ingredientElement.classList.add('hidden');
    }
}

// Gestion du swipe pour passer d'une section à une autre
let currentSection = 0;
const sections = document.querySelectorAll('section');

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (xDiff > 0) {
        // Swipe gauche -> section suivante
        nextSection();
    } else {
        // Swipe droite -> section précédente
        previousSection();
    }

    xDown = null;
}

function nextSection() {
    if (currentSection < sections.length - 1) {
        sections[currentSection].classList.add('hidden');
        currentSection++;
        sections[currentSection].classList.remove('hidden');
    }
}

function previousSection() {
    if (currentSection > 0) {
        sections[currentSection].classList.add('hidden');
        currentSection--;
        sections[currentSection].classList.remove('hidden');
    }
}
