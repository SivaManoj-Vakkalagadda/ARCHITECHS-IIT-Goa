// Select all event cards
const cards = document.querySelectorAll('.events_card');

// Add mouseenter and mouseleave events to each card
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Scale up the hovered card
        card.style.transform = 'scale(1.1)'; // Scale up the hovered card
        card.style.transition = 'transform 0.3s ease'; // Smooth transition
    });

    card.addEventListener('mouseleave', () => {
        // Reset scale for the hovered card
        card.style.transform = 'scale(1)'; // Reset scale on mouse leave
    });
});

// Select all email links
const emailLinks = document.querySelectorAll('.email_link');

// Add click event listener to each email link
emailLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const email = link.textContent.replace('Email: ', ''); // Extract email
        alert(`Preparing to send an email to ${email}`);
    });
});

// Select all contact links
const contactLinks = document.querySelectorAll('.contact-link');
const confirmationMessage = document.getElementById("confirmation-message");

// Add click event listener to each contact link
contactLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevent default behavior to handle confirmation
        event.preventDefault();

        // Display a confirmation message
        confirmationMessage.style.display = 'block';
        confirmationMessage.innerHTML = `You are now leaving this page to visit ${link.innerText}.`;

        // Open the link after a brief delay
        setTimeout(() => {
            window.open(link.href, '_blank');
        }, 2000); // 2 seconds delay
    });
});

// Hide confirmation message after a set time
setTimeout(() => {
    confirmationMessage.style.display = 'none';
}, 5000); // 5 seconds

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
