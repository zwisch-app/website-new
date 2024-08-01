document.addEventListener('DOMContentLoaded', () => {
    const waitlistForm = document.getElementById('waitlist-form');
    const modal = document.getElementById('success-modal');
    const closeBtn = document.getElementsByClassName('close')[0];

    waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = waitlistForm.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your server
        // For this example, we'll just log it to the console
        console.log('Email submitted:', email);
        
        // Show the success modal
        modal.style.display = 'block';
        
        waitlistForm.reset();
    });

    // Close the modal when clicking on x
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    // Close the modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Add animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-item, .feature-highlight');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight * 0.8) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Call once on load
});