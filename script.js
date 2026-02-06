document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const enterBtn = document.getElementById('enterBtn');
    const audio = document.getElementById('ambianceTrack');
    const musicBtn = document.getElementById('musicBtn');
    const heroSection = document.querySelector('.hero');
    const fadeElements = document.querySelectorAll('.fade-in-up');

    // 1. LOGIKA TOMBOL MASUK (Agar Musik Autoplay)
    enterBtn.addEventListener('click', () => {
        // Hilangkan layar pembuka
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 1000);

        // Mulai Musik
        audio.play().then(() => {
            musicBtn.innerHTML = "🎵 Playing...";
        }).catch(err => {
            console.log("Autoplay blocked:", err);
            musicBtn.innerHTML = "🔇 Play Music";
        });

        // Aktifkan animasi Hero
        heroSection.classList.add('active');
        
        // Munculkan teks satu per satu
        fadeElements.forEach(el => {
            el.classList.add('visible');
        });
    });

    // 2. KONTROL AUDIO MANUAL
    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.innerHTML = "🎵 Playing...";
            musicBtn.classList.add('pulse-effect');
        } else {
            audio.pause();
            musicBtn.innerHTML = "⏸ Paused";
            musicBtn.classList.remove('pulse-effect');
        }
    });

    // 3. ANIMASI SCROLL (Muncul saat digulir)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in-up'); // Tambah class animasi dasar
        observer.observe(section);
    });
});
