// Tunggu hingga dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menangani scrolling halus
    function scrollHalus(target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Tambahkan event listener untuk semua link internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                scrollHalus(targetElement);
            }
        });
    });

    // Fungsi untuk animasi fade-in elemen saat di-scroll
    function animasiMunculSaatScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            if (rect.top <= viewHeight * 0.75 && rect.bottom >= 0) {
                el.classList.add('visible');
            }
        });
    }

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', animasiMunculSaatScroll);

    // Panggil fungsi saat halaman dimuat untuk memeriksa elemen yang sudah terlihat
    animasiMunculSaatScroll();

    // Fungsi untuk toggle menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    function bukaPopupSport() {
        window.open('payment-sport.html', 'PopupWindow', 'width=500,height=800');
    }

    // Tambahkan event listener untuk tombol yang membuka popup
    const popupButton = document.getElementById('popup-button-sport');
    if (popupButton) {
        popupButton.addEventListener('click', bukaPopupSport);
    }
});
