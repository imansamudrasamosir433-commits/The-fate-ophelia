// --- AUDIO PLAYER LOGIC ---
const btn = document.getElementById('musicBtn');
const audio = document.getElementById('ambianceTrack');

btn.addEventListener('click', () => {
    if (audio.paused) {
        // Mencoba memutar audio
        audio.play().catch(error => {
            console.log("Autoplay dicegah browser:", error);
            alert("Silakan klik lagi untuk memutar musik.");
        });
        btn.innerHTML = "⏸ Pause Ambiance";
        btn.style.borderColor = "#fff";
        btn.style.background = "rgba(255,255,255,0.1)";
    } else {
        // Pause audio
        audio.pause();
        btn.innerHTML = "🎵 Play Ambiance";
        btn.style.borderColor = "#a89f81";
        btn.style.background = "rgba(0,0,0,0.5)";
    }
});

// --- PARALLAX EFFECT FOR TEXT ---
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    // Pastikan elemen ada sebelum dimanipulasi agar tidak error
    if(heroContent) {
        // Teks bergerak turun lebih lambat dari scroll (efek kedalaman)
        heroContent.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
        
        // Teks perlahan menghilang saat di-scroll ke bawah
        heroContent.style.opacity = 1 - (scrollPosition / 700);
    }
});
