const faders = document.querySelectorAll('.fade-in');
const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.nav');
const close = document.querySelector('.fa-xmark');
const heroSection = document.querySelector('.containered');
const nav = document.querySelector('.menu');

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

faders.forEach((fader) => observer.observe(fader));


let isActive = false;
hamburger.addEventListener('click' , () =>{
    if (!isActive) {
        ul.classList.toggle('active');
        hamburger.classList.toggle('active');
      close.classList.add('active')
    }
    else {
        ul.classList.remove('active');
    }
    close.addEventListener('click', () =>{

        ul.classList.remove('active');
        hamburger.classList.add('active');
      close.classList.remove('active')

    })
}) 

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
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

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
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

function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "Aliahmed9973312@gmail.com",
        Password : "Asdfgh@99977",
        To : 'Aliahmed9973312@gmail.com',
        From : email,
        Subject : subject,
        Body : "Name: " +  firstNameInput.value + " " + lastNameInput.value + "\nEmail: " + emailInput.value + "\n\n" + textareaInput.value
    }).then(
        message => alert(message)
    );
}
