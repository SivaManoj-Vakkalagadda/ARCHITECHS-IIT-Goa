// Select all event cards
const cards = document.querySelectorAll('.events_card');


cards.forEach(card => {
    card.addEventListener('mouseenter', () => {

        card.style.transform = 'scale(1.1)'; 
        card.style.transition = 'transform 0.3s ease'; 
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; 
    });
});

// Select all email links
const emailLinks = document.querySelectorAll('.email_link');


emailLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const email = link.textContent.replace('Email: ', ''); 
        alert(`Preparing to send an email to ${email}`);
    });
});

// Select all contact links
// const contactLinks = document.querySelectorAll('.contact-link');
// const confirmationMessage = document.getElementById("confirmation-message");

// // Add click event listener to each contact link
// contactLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         // Prevent default behavior to handle confirmation
//         event.preventDefault();

//         // Display a confirmation message
//         confirmationMessage.style.display = 'block';
//         confirmationMessage.innerHTML = `You are now leaving this page to visit ${link.innerText}.`;

//         // Open the link after a brief delay
//         setTimeout(() => {
//             window.open(link.href, '_blank');
//         }, 2000); // 2 seconds delay
//     });
// });

// // Hide confirmation message after a set time
// setTimeout(() => {
//     confirmationMessage.style.display = 'none';
// }, 5000); // 5 seconds

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 100; // 50px offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Smooth scrolling
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); 
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide) => {
        slide.classList.remove('active'); 
    });
    
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; 
    }
    
    slides[slideIndex].classList.add('active'); 
}

showSlides();
// Change slide every 5 seconds
setInterval(showSlides, 5000);

document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        console.log(`Navigating to ${this.querySelector('img').alt}`);
    });
});
