// Initialize AOS (Animate On Scroll)
function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

// Floating Petals Animation
function createFloatingPetals() {
    const container = document.getElementById('petalsContainer');
    const petalCount = 15;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Random properties
        const size = Math.random() * 8 + 6;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        
        petal.style.left = left + '%';
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';
        
        // Random colors
        const colors = ['#e11d48', '#f43f5e', '#ec4899', '#be185d'];
        petal.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(petal);
    }
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Tab Functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Care Guide Interactive Steps
function initCareGuide() {
    const stepItems = document.querySelectorAll('.step-item');
    const careImages = document.querySelectorAll('.care-image');
    
    stepItems.forEach(step => {
        step.addEventListener('click', () => {
            const stepNumber = step.getAttribute('data-step');
            
            // Remove active class from all steps and images
            stepItems.forEach(item => item.classList.remove('active'));
            careImages.forEach(img => img.classList.remove('active'));
            
            // Add active class to clicked step and corresponding image
            step.classList.add('active');
            const targetImage = document.querySelector(`[data-image="${stepNumber}"]`);
            if (targetImage) {
                targetImage.classList.add('active');
            }
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Newsletter Form
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // Simulate form submission
        const button = form.querySelector('button');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<span>Subscribing...</span>';
        button.disabled = true;
        
        setTimeout(() => {
            alert(`Thank you for subscribing! 🌹\nWelcome to our rose garden community.\nYou'll receive exclusive tips and offers at: ${email}`);
            form.reset();
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    });
}

// Quick View Modal (Simple Implementation)
function initQuickView() {
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const roseCard = button.closest('.rose-card');
            const roseName = roseCard.querySelector('.rose-name').textContent;
            const rosePrice = roseCard.querySelector('.rose-price').textContent;
            const roseDescription = roseCard.querySelector('.rose-description').textContent;
            
            alert(`🌹 ${roseName}\n\n${roseDescription}\n\nPrice: ${rosePrice}\n\nWould you like to add this beautiful rose to your cart?`);
        });
    });
}

// Button Click Effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Parallax Effect for Hero Section
function initParallax() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.main-image');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Collection Item Hover Effects
function initCollectionEffects() {
    const collectionItems = document.querySelectorAll('.collection-item');
    
    collectionItems.forEach(item => {
        const shopButton = item.querySelector('.btn-white');
        
        if (shopButton) {
            shopButton.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemName = item.querySelector('h3').textContent;
                const itemPrice = item.querySelector('.price').textContent;
                
                alert(`🛒 Added to Cart!\n\n${itemName}\n${itemPrice}\n\nThank you for choosing our premium roses!`);
            });
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    createFloatingPetals();
    animateCounters();
    initTabs();
    initCareGuide();
    initSmoothScrolling();
    initHeaderScroll();
    initNewsletterForm();
    initQuickView();
    initButtonEffects();
    initParallax();
    initCollectionEffects();
    
    // Add ripple effect CSS
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Initialize page with loading state
document.body.style.opacity = '0';