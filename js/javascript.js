const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navbar = document.getElementsByClassName('navbar')[0];

// Tambahkan event listener untuk mendeteksi event scroll pada window
window.addEventListener('scroll', () => {
    // Jika posisi scroll lebih dari 0 (scroll ke bawah), tambahkan class 'scrolled' pada navbar, selain itu, hapus class 'scrolled'
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
