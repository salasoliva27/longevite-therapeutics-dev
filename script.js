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

// ── Hero: letter-by-letter title reveal ──
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const raw = heroTitle.textContent;
    heroTitle.innerHTML = raw.split('').map(ch =>
        `<span class="hero-char" style="display:inline-block">${ch === ' ' ? '&nbsp;' : ch}</span>`
    ).join('');
    gsap.set(heroTitle, { opacity: 1 });
    gsap.from(heroTitle.querySelectorAll('.hero-char'), {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.025,
        duration: 0.55,
        ease: 'back.out(1.4)',
        delay: 0.2
    });
}

// ── Hero: rest of elements ──
gsap.timeline({ delay: 0.3 })
    .to('.hero-tagline', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.7
    })
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4');

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

// ── Therapy cards — fromTo with explicit opacity:1 end state ──
gsap.utils.toArray('.therapy-card').forEach((card, index) => {
    gsap.fromTo(card,
        { opacity: 0, y: 40 },
        {
            opacity: 1, y: 0,
            scrollTrigger: { trigger: card, start: 'top 82%', toggleActions: 'play none none none' },
            duration: 0.8,
            delay: (index % 3) * 0.1,
            ease: 'power3.out'
        }
    );
});

// ── Differentiator cards ──
gsap.utils.toArray('.differentiator-card').forEach((card, index) => {
    gsap.fromTo(card,
        { opacity: 0, y: 35 },
        {
            opacity: 1, y: 0,
            scrollTrigger: { trigger: card, start: 'top 82%', toggleActions: 'play none none none' },
            duration: 0.75,
            delay: (index % 2) * 0.12,
            ease: 'power3.out'
        }
    );
});

// ── Condition items ──
gsap.utils.toArray('.condition-item').forEach((item, index) => {
    gsap.fromTo(item,
        { opacity: 0, scale: 0.92 },
        {
            opacity: 1, scale: 1,
            scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
            duration: 0.5,
            delay: (index % 4) * 0.04,
            ease: 'back.out(1.2)'
        }
    );
});

// ── Benefit items ──
gsap.utils.toArray('.benefit-item').forEach((item, index) => {
    gsap.fromTo(item,
        { opacity: 0, y: 25 },
        {
            opacity: 1, y: 0,
            scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
            duration: 0.6,
            delay: (index % 4) * 0.07,
            ease: 'power3.out'
        }
    );
});

// ── Authority banner ──
gsap.fromTo('.authority-banner',
    { opacity: 0, x: -40 },
    {
        opacity: 1, x: 0,
        scrollTrigger: { trigger: '.authority-banner', start: 'top 82%', toggleActions: 'play none none none' },
        duration: 0.9,
        ease: 'power3.out'
    }
);

// ── Insight cards ──
gsap.utils.toArray('.insight-card').forEach((card, index) => {
    gsap.fromTo(card,
        { opacity: 0, y: 45 },
        {
            opacity: 1, y: 0,
            scrollTrigger: { trigger: card, start: 'top 82%', toggleActions: 'play none none none' },
            duration: 0.9,
            delay: index * 0.18,
            ease: 'power3.out'
        }
    );
});

// ── FAQ items ──
gsap.utils.toArray('.faq-item').forEach((item, index) => {
    gsap.fromTo(item,
        { opacity: 0, y: 25 },
        {
            opacity: 1, y: 0,
            scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
            duration: 0.6,
            delay: index * 0.06,
            ease: 'power3.out'
        }
    );
});

// ============================================
// STAT COUNTER ANIMATION
// ============================================
gsap.utils.toArray('.stat-number').forEach((el) => {
    const text = el.textContent.trim();
    const numMatch = text.match(/[\d.]+/);
    if (!numMatch) return;
    const target = parseFloat(numMatch[0]);
    const prefix = text.split(numMatch[0])[0];
    const suffix = text.split(numMatch[0])[1] || '';

    gsap.fromTo(el,
        { innerText: 0 },
        {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: Number.isInteger(target) ? 1 : 0.1 },
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                once: true
            },
            onUpdate() {
                const val = parseFloat(this.targets()[0].innerText);
                el.textContent = prefix + (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
            }
        }
    );
});

// ============================================
// SECTION IMAGE — CINEMATIC PARALLAX SCRUB
// ============================================
// Each section image starts slightly zoomed-in and shifts vertically
// as you scroll, creating a cinematic parallax effect (gsap-scrolltrigger skill)
document.querySelectorAll('.section-image-container').forEach((container) => {
    const image = container.querySelector('.section-image');

    // Reveal container
    gsap.fromTo(container,
        { opacity: 0, scale: 0.96 },
        {
            opacity: 1,
            scale: 1,
            duration: 1.0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: container,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // Parallax on the image inside (scrub = tied to scroll progress)
    if (image) {
        gsap.fromTo(image,
            { yPercent: -8 },
            {
                yPercent: 8,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                }
            }
        );
    }
});

// ============================================
// MAGNETIC 3D TILT — CARDS
// ============================================
// Cards respond to cursor position with a subtle 3D tilt (ui-ux-pro-max: animation conveys meaning)
document.querySelectorAll('.therapy-card, .differentiator-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        gsap.to(card, {
            rotateY: dx * 8,
            rotateX: -dy * 8,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 900,
            overwrite: 'auto'
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
            overwrite: 'auto'
        });
    });
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
