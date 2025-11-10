
// Gestion des menus contextuels
document.addEventListener('DOMContentLoaded', function () {
    const memberPhoto = document.getElementById('memberPhoto');
    const photoMenu = document.getElementById('photoMenu');
    const notificationsBtn = document.getElementById('toggleNotifications');
    const cotisationsBtn = document.getElementById('toggleCotisations');
    const notificationsMenu = document.getElementById('notificationsMenu');
    const cotisationsMenu = document.getElementById('cotisationsMenu');
    const overlay = document.getElementById('menuOverlay');
    const closeButtons = document.querySelectorAll('.close-menu');

    function openMenu(menu) {
        menu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeAllMenus() {
        document.querySelectorAll('.context-menu').forEach(menu => {
            menu.classList.remove('active');
        });
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Ouvrir les menus
    memberPhoto.addEventListener('click', () => openMenu(photoMenu));
    notificationsBtn.addEventListener('click', () => openMenu(notificationsMenu));
    cotisationsBtn.addEventListener('click', () => openMenu(cotisationsMenu));

    // Fermer avec les boutons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const menuId = e.target.closest('.close-menu').dataset.menu;
            const menu = document.getElementById(menuId);
            if (menu) {
                menu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Fermer avec l'overlay
    overlay.addEventListener('click', closeAllMenus);

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllMenus();
        }
    });

    // Fonctionnalités pour les boutons de navigation
    document.getElementById('scrollToTop').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('scrollToBottom').addEventListener('click', function () {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});

// Fonction pour toggle les notifications
function toggleNotification(header) {
    const notificationItem = header.parentElement;
    notificationItem.classList.toggle('active');
}

// Fonction pour changer le statut de paiement (désactivée)
function togglePayment(dayItem) {
    // Fonction désactivée - ne fait rien
    return false;
}

// Fonction pour mettre à jour les statistiques de cotisation
function updateCotisationStats() {
    const totalDays = document.querySelectorAll('.day-item').length;
    const paidDays = document.querySelectorAll('.day-item.paid').length;
    const percentage = Math.round((paidDays / totalDays) * 100);

    // Tu peux utiliser ces valeurs si tu veux afficher des statistiques
    console.log(`Jours payés: ${paidDays}/${totalDays} (${percentage}%)`);
}

// Initialiser les statistiques au chargement
window.addEventListener('DOMContentLoaded', function () {
    updateCotisationStats();
});