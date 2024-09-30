const cards = document.querySelectorAll('.events_card');

// Add mouseenter and mouseleave events to each card
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Scale up the hovered card
        card.style.transform = 'scale(1.1)'; // Scale up the hovered card
    });

    card.addEventListener('mouseleave', () => {
        // Reset scale for the hovered card
        card.style.transform = 'scale(1)'; // Reset scale on mouse leave
    });
});

const emailLinks = document.querySelectorAll('.ct_email-link');

// Add click event listener to each email link
emailLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const email = link.textContent.replace('Email: ', ''); // Extract email
        alert(`Preparing to send an email to ${email}`);
    });
});
