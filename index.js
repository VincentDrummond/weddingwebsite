
function closeMenu() {
        document.getElementById('menu-toggle').checkbox.checked = false;
    }

    let clickHere = document.getElementById('menuItemReception');
    clickHere.addEventListener('click', closeMenu());