// changer couleur du fond
function changerStyle(couleur, nomRéseau) {
    const header = document.querySelector('header');
    const icones = document.querySelectorAll('.carre1, .carre2, .carre3');

    // Vérifie si l'icone est active
    const iconeActive = document.querySelector(`.${nomRéseau}`);
    let isActive = iconeActive.classList.contains('active');  

    // Masquer le nom des réseaux et réinitialiser les carrés
    icones.forEach(icône => {
        icône.classList.remove('active');
        const p = icône.querySelector('.name');
        if (p) {
            p.style.display = 'none'; // Masquer les noms des réseaux sociaux
        }
    });

    // Si l'icône était déjà active, réinitialiser le fond à gris
    if (isActive) {
        if (header) {
            header.style.backgroundColor = 'grey'; // Fond gris au 2eme clique
        }
    } else {
        // "Activer" l'icone
        iconeActive.classList.add('active');
        const p = iconeActive.querySelector('.name');
        if (p) {
            p.style.display = 'block'; // Afficher le nom du réseau 
        }

        // mettre couleur de fond qui correspond à chaque réseaux
        if (header) {
            header.style.backgroundColor = couleur; // Changer la couleur du header
        }
    }
}

// Attacher les événements de clic aux icônes
document.querySelector('.carre1').addEventListener('click', function() {
    changerStyle('blue', 'carre1'); // Facebook
});

document.querySelector('.carre2').addEventListener('click', function() {
    changerStyle('cornflowerblue', 'carre2'); // Twitter
});

document.querySelector('.carre3').addEventListener('click', function() {
    changerStyle('mediumvioletred', 'carre3'); // Instagram
});
