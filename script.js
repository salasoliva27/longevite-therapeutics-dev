// ============================================
// EVENT POPUP MODAL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const eventPopup = document.getElementById('eventPopup');
    const closeButton = document.getElementById('closeEventPopup');

    // Show popup after a short delay (allows page to load smoothly)
    setTimeout(() => {
        eventPopup.classList.add('active');
        // Prevent body scroll when popup is open
        document.body.style.overflow = 'hidden';
    }, 500);

    // Close popup function
    const closePopup = () => {
        eventPopup.classList.remove('active');
        // Re-enable body scroll
        document.body.style.overflow = '';
    };

    // Close on button click
    closeButton.addEventListener('click', closePopup);

    // Close on overlay click (clicking outside the popup content)
    eventPopup.addEventListener('click', (e) => {
        if (e.target === eventPopup) {
            closePopup();
        }
    });

    // Close on ESC key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && eventPopup.classList.contains('active')) {
            closePopup();
        }
    });
});

// ============================================
// LANGUAGE TOGGLE
// ============================================
let activeLang = 'es';

function setLanguage(lang) {
    activeLang = lang;
    sessionStorage.setItem('language', lang);

    // Update language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update content visibility - toggle all elements with lang-es and lang-en classes
    document.querySelectorAll('.lang-es').forEach(el => {
        if (lang === 'es') {
            el.style.display = 'inline';
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.add('hidden');
        }
    });

    document.querySelectorAll('.lang-en').forEach(el => {
        if (lang === 'en') {
            el.style.display = 'inline';
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.add('hidden');
        }
    });
}

// Initialize language IMMEDIATELY - run before DOM ready
const savedLang = sessionStorage.getItem('language') || 'es';
activeLang = savedLang;

// Set initial language visibility immediately
if (document.readyState === 'loading') {
    // If DOM is still loading, set language as soon as possible
    document.addEventListener('DOMContentLoaded', () => {
        setLanguage(savedLang);

        // Language toggle event listeners
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setLanguage(btn.dataset.lang);
            });
        });
    });
} else {
    // DOM already loaded, set language now
    setLanguage(savedLang);

    // Language toggle event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// ============================================
// HEADER SCROLL BEHAVIOR
// ============================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close mobile menu on link click
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // FALLBACK: Make elements visible immediately if they're in viewport on page load
    setTimeout(() => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const inViewport = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );

            if (inViewport && !el.classList.contains('animate-in')) {
                el.classList.add('animate-in');
            }
        });
    }, 500);

    // EMERGENCY FALLBACK: Make ALL elements visible after 2 seconds if still not visible
    setTimeout(() => {
        animatedElements.forEach(el => {
            if (!el.classList.contains('animate-in')) {
                el.classList.add('animate-in');
            }
        });
    }, 2000);
});

// ============================================
// CONDITIONS ACCORDION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.condition-item').forEach(item => {
        const header = item.querySelector('.condition-header');
        if (header) {
            header.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });
});

// ============================================
// FAQ ACCORDION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    const itemAnswer = item.querySelector('.faq-answer');
                    if (itemAnswer) {
                        itemAnswer.style.maxHeight = '0';
                    }
                }
            });

            // Toggle current item
            if (isActive) {
                faqItem.classList.remove('active');
                answer.style.maxHeight = '0';
            } else {
                faqItem.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});

// ============================================
// CONTACT FORM VALIDATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;

            // Name validation
            const name = document.getElementById('name');
            if (name.value.trim() === '') {
                name.parentElement.classList.add('error');
                isValid = false;
            } else {
                name.parentElement.classList.remove('error');
            }

            // Email validation
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.parentElement.classList.add('error');
                isValid = false;
            } else {
                email.parentElement.classList.remove('error');
            }

            // Phone validation
            const phone = document.getElementById('phone');
            if (phone.value.trim() === '') {
                phone.parentElement.classList.add('error');
                isValid = false;
            } else {
                phone.parentElement.classList.remove('error');
            }

            // Message validation
            const message = document.getElementById('message');
            if (message.value.trim() === '') {
                message.parentElement.classList.add('error');
                isValid = false;
            } else {
                message.parentElement.classList.remove('error');
            }

            if (isValid) {
                // Success message
                alert(activeLang === 'es'
                    ? '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.'
                    : 'Thank you for your message! We will contact you soon.');
                contactForm.reset();
            }
        });

        // Real-time validation
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim() !== '') {
                    input.parentElement.classList.remove('error');
                }
            });
        });
    }
});

// ============================================
// GSAP ANIMATIONS
// ============================================
gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.timeline()
    .to('.hero-logo', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .to('.hero h1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .to('.hero-tagline', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .to('.hero-ctas', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5');

// Parallax effect for hero background
gsap.to('.hero-background', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

// Stagger animations for therapy cards
gsap.utils.toArray('.therapy-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.08,
        ease: 'power3.out'
    });
});

// Stagger animations for differentiator cards
gsap.utils.toArray('.differentiator-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Stagger animations for condition items
gsap.utils.toArray('.condition-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        delay: index * 0.03,
        ease: 'back.out(1.2)'
    });
});

// Stagger animations for benefit items
gsap.utils.toArray('.benefit-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: index * 0.06,
        ease: 'power3.out'
    });
});

// Authority banner slide-in
gsap.from('.authority-banner', {
    scrollTrigger: {
        trigger: '.authority-banner',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out'
});

// Insight cards animation
gsap.utils.toArray('.insight-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.9,
        delay: index * 0.2,
        ease: 'power3.out'
    });
});

// FAQ items stagger
gsap.utils.toArray('.faq-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// ============================================
// PAGE LOADER
// ============================================
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
    }, 800);
});

// ============================================
// IMAGE ANIMATIONS WITH GSAP
// ============================================
gsap.registerPlugin(ScrollTrigger);

// Animate section images with smooth scale and fade
document.querySelectorAll('.section-image-container').forEach((container) => {
    const image = container.querySelector('.section-image');

    gsap.fromTo(container,
        {
            opacity: 0,
            y: 60,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // Subtle parallax effect on scroll
    if (image) {
        gsap.to(image, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }
});

// Animate therapy product images with elegant fade and scale
document.querySelectorAll('.therapy-image-wrapper').forEach((wrapper, index) => {
    gsap.fromTo(wrapper,
        {
            opacity: 0,
            scale: 0.9,
            y: 30
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// ============================================
// REDUCED MOTION SUPPORT
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable GSAP animations
    gsap.globalTimeline.pause();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Show all elements immediately
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .section-image-container, .therapy-image-wrapper').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}
