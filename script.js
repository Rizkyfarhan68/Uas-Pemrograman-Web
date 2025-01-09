// Script untuk interaksi jika diperlukan
document.addEventListener('DOMContentLoaded', function() {
    // Contoh: Menambahkan efek scroll smooth
    const links = document.querySelectorAll('a.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});