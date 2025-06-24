// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate form submission
    alert(`Thank you for subscribing with email: ${email}\nYou'll receive a 15% discount code shortly!`);
    
    // Reset form
    e.target.reset();
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.btn-small');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        // Simulate adding to cart
        alert(`Added to cart:\n${productName} - ${productPrice}`);
        
        // Add visual feedback
        button.textContent = 'Added!';
        button.style.background = '#16a34a';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.background = '';
        }, 2000);
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
const cards = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// Product image hover effects
const productImages = document.querySelectorAll('.product-image img');

productImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.textContent = `© ${currentYear} BloomCraft. All rights reserved.`;
    }
    
    // Add loading state
    document.body.style.opacity = '0';
});