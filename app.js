
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
});

const faders = document.querySelectorAll('.fade-in');
faders.forEach((fader) => observer.observe(fader));

function goToMessenger() {
    
}

function goAboutPage() {
    window.location.href = 'about.html';
}