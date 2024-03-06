
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            // entry.target.classList.remove('show');
        }
    })
});

const faders = document.querySelectorAll('.fade-in');
faders.forEach((fader) => observer.observe(fader));

// nav

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
let isActive = false;
hamburger.addEventListener('click', () => {
    if (!isActive) {
        nav.classList.toggle('active');
    }
    else {
        nav.classList.remove('active');
    }
})

function goAboutPage() {
    window.location.href = 'about.html';
}

// contact section
let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let emailInput = document.getElementById('email');
let subjectInput = document.getElementById('subject');
let textareaInput = document.getElementById('textarea');
let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = textareaInput.value.trim();

    if (!firstName || !lastName || !email || !subject || !message) {
        alert("Please fill all the fields!");
    } else {
        alert("Form submitted successfully!");
        clearInputs();
        addToLocal(firstName, lastName, email, subject, message);
    }
});

function clearInputs() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    subjectInput.value = '';
    textareaInput.value = '';
}

function addToLocal(firstName, lastName, email, subject, message) {
    let existingData = JSON.parse(localStorage.getItem('formData')) || [];
    const newData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message
    };
    existingData.push(newData);
    localStorage.setItem('formData', JSON.stringify(existingData));
}