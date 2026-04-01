// ============================================
// PRODUCTS CONFIG
// One entry per image file in images/products/
// The filename (without extension) is the product name shown in the bubble.
// Drop a photo in that folder and add an entry here — it appears automatically.
// ============================================
const PRODUCTS = [
    {
        file: 'Myers.jpg',
        nameEs: "Myers' Cocktail",
        nameEn: "Myers' Cocktail",
        descEs: "Mezcla clásica de vitaminas y minerales esenciales que potencia la energía celular. Magnesio, calcio, complejo B y vitamina C en una sola infusión. Ideal para recuperación, vitalidad y soporte inmunológico.",
        descEn: "Classic blend of essential vitamins and minerals that enhances cellular energy. Magnesium, calcium, B-complex, and vitamin C in a single infusion. Ideal for recovery, vitality, and immune support.",
        color: '#8B7040',
        size: 158
    },
    {
        file: 'NAD.jpg',
        nameEs: "NAD+",
        nameEn: "NAD+",
        descEs: "Coenzima esencial para la reparación del ADN, la producción de energía celular y la función cognitiva. Los niveles de NAD+ disminuyen ~40% a los 50 años. La infusión IV restaura niveles juveniles y frena el envejecimiento celular.",
        descEn: "Essential coenzyme for DNA repair, cellular energy production, and cognitive function. NAD+ levels decline ~40% by age 50. IV infusion restores youthful levels and slows cellular aging.",
        color: '#5A3A8A',
        size: 152
    },
    {
        file: 'Glutathione.jpg',
        nameEs: "Glutatión",
        nameEn: "Glutathione",
        descEs: "El antioxidante maestro del organismo. Neutraliza radicales libres, desintoxica el hígado, fortalece el sistema inmune y tiene efecto luminoso sobre la piel. Vía IV garantiza absorción total.",
        descEn: "The body's master antioxidant. Neutralizes free radicals, detoxifies the liver, strengthens the immune system, and brightens the skin. IV delivery ensures complete absorption.",
        color: '#3A7A5A',
        size: 148
    },
    {
        file: 'VitaminaC.jpg',
        nameEs: "Vitamina C\nAlta Dosis",
        nameEn: "High-Dose\nVitamin C",
        descEs: "Dosis de 10–75 g directamente en el torrente sanguíneo. Potente antioxidante, estimula la síntesis de colágeno, refuerza la inmunidad y tiene efecto antiinflamatorio. Inaccesible por vía oral a estas concentraciones.",
        descEn: "10–75 g doses delivered directly into the bloodstream. Powerful antioxidant, stimulates collagen synthesis, strengthens immunity, and has anti-inflammatory effects. Unachievable through oral supplementation at these concentrations.",
        color: '#C85A20',
        size: 150
    },
    {
        file: 'Ozone.jpg',
        nameEs: "Terapia de\nOzono",
        nameEn: "Ozone\nTherapy",
        descEs: "Autohemoterapia mayor (MAH): sangre enriquecida con ozono medicinal y reinfundida. Modula el sistema inmune, reduce inflamación sistémica y mejora la oxigenación celular.",
        descEn: "Major autohemotherapy (MAH): blood enriched with medical ozone and reinfused. Modulates the immune system, reduces systemic inflammation, and improves cellular oxygenation.",
        color: '#2A6A9A',
        size: 146
    },
    {
        file: 'Chelation.jpg',
        nameEs: "Quelación",
        nameEn: "Chelation",
        descEs: "Protocolo EDTA/DMPS para eliminar metales pesados acumulados (plomo, mercurio, arsénico). Desintoxica el organismo, mejora la función cardiovascular y restaura el equilibrio mineral.",
        descEn: "EDTA/DMPS protocol to eliminate accumulated heavy metals (lead, mercury, arsenic). Detoxifies the body, improves cardiovascular function, and restores mineral balance.",
        color: '#7A5A3A',
        size: 144
    },
    {
        file: 'Phosphatidylcholine.jpg',
        nameEs: "Fosfatidil-\ncolina",
        nameEn: "Phosphatidyl-\ncholine",
        descEs: "Componente esencial de las membranas celulares. Apoya la función cerebral, regenera el hígado, mejora la memoria y la concentración. Terapia de referencia en protocolos antiaging avanzados.",
        descEn: "Essential component of cell membranes. Supports brain function, regenerates the liver, and improves memory and concentration. Reference therapy in advanced anti-aging protocols.",
        color: '#5A7A3A',
        size: 144
    },
    {
        file: 'ImmuneBoost.jpg',
        nameEs: "Impulso\nInmune",
        nameEn: "Immune\nBoost",
        descEs: "Combinación de alta dosis de vitamina C, zinc, selenio y glutatión. Activa y refuerza el sistema inmunológico de forma rápida. Ideal en temporadas de alta exposición o recuperación de enfermedades.",
        descEn: "Combination of high-dose vitamin C, zinc, selenium, and glutathione. Rapidly activates and strengthens the immune system. Ideal during high-exposure seasons or disease recovery.",
        color: '#9A3A5A',
        size: 148
    },
    {
        file: 'Antiaging.jpg',
        nameEs: "Protocolo\nAntiaging",
        nameEn: "Anti-Aging\nProtocol",
        descEs: "Protocolo de longevidad avanzado: NAD+, glutatión y fosfatidilcolina combinados. Regenera células, protege el ADN, optimiza la función mitocondrial y frena el envejecimiento a nivel molecular.",
        descEn: "Advanced longevity protocol: NAD+, glutathione, and phosphatidylcholine combined. Regenerates cells, protects DNA, optimizes mitochondrial function, and slows aging at the molecular level.",
        color: '#3A5A9A',
        size: 152
    }
    // To add a new product: drop the photo in images/products/ and add an entry above.
    // Max 9 bubbles fit in the vein scene. Remove one entry if adding beyond 9.
];

// Organic position presets for 1–9 bubbles inside the vein scene
// Each sub-array has positions for that many bubbles
const BUBBLE_POSITIONS = [
    /* 1 */ [{bx:'44%', by:'28%', bs:170}],
    /* 2 */ [{bx:'28%', by:'26%', bs:160}, {bx:'62%', by:'40%', bs:155}],
    /* 3 */ [{bx:'12%', by:'22%', bs:158}, {bx:'46%', by:'46%', bs:150}, {bx:'74%', by:'18%', bs:156}],
    /* 4 */ [{bx:'6%', by:'16%', bs:155}, {bx:'30%', by:'50%', bs:148}, {bx:'54%', by:'12%', bs:160}, {bx:'78%', by:'46%', bs:150}],
    /* 5 */ [{bx:'4%', by:'16%', bs:155}, {bx:'20%', by:'50%', bs:148}, {bx:'36%', by:'12%', bs:162}, {bx:'56%', by:'48%', bs:144}, {bx:'76%', by:'14%', bs:156}],
    /* 6 */ [{bx:'4%', by:'16%', bs:152}, {bx:'18%', by:'50%', bs:146}, {bx:'32%', by:'12%', bs:158}, {bx:'50%', by:'48%', bs:142}, {bx:'66%', by:'12%', bs:154}, {bx:'82%', by:'46%', bs:148}],
    /* 7 */ [{bx:'2%', by:'16%', bs:150}, {bx:'16%', by:'50%', bs:144}, {bx:'29%', by:'12%', bs:156}, {bx:'43%', by:'48%', bs:140}, {bx:'57%', by:'12%', bs:156}, {bx:'70%', by:'46%', bs:144}, {bx:'84%', by:'14%', bs:150}],
    /* 8 */ [{bx:'2%', by:'16%', bs:148}, {bx:'14%', by:'50%', bs:142}, {bx:'26%', by:'12%', bs:154}, {bx:'39%', by:'48%', bs:138}, {bx:'52%', by:'12%', bs:154}, {bx:'65%', by:'46%', bs:142}, {bx:'77%', by:'12%', bs:148}, {bx:'89%', by:'44%', bs:142}],
    /* 9 */ [{bx:'2%', by:'16%', bs:146}, {bx:'13%', by:'50%', bs:140}, {bx:'24%', by:'12%', bs:152}, {bx:'36%', by:'48%', bs:136}, {bx:'48%', by:'12%', bs:152}, {bx:'59%', by:'48%', bs:140}, {bx:'70%', by:'12%', bs:146}, {bx:'81%', by:'46%', bs:140}, {bx:'90%', by:'22%', bs:146}]
];

function buildBubbles() {
    const container = document.querySelector('.vein-bubbles');
    if (!container || !PRODUCTS.length) return;

    const n = Math.min(PRODUCTS.length, BUBBLE_POSITIONS.length);
    const positions = BUBBLE_POSITIONS[n - 1];

    PRODUCTS.forEach((p, i) => {
        const pos = positions[Math.min(i, positions.length - 1)];
        const el = document.createElement('div');
        el.className = 'therapy-bubble';
        el.dataset.nameEs = p.nameEs;
        el.dataset.nameEn = p.nameEn;
        el.dataset.descEs = p.descEs || '';
        el.dataset.descEn = p.descEn || '';
        el.style.cssText = `--bx:${pos.bx};--by:${pos.by};--bs:${pos.bs}px;--bc:${p.color || '#8B7040'}`;
        el.innerHTML = `
            <div class="bubble-shell">
                <img src="images/products/${p.file}" alt="${p.nameEs}" class="bubble-img" onerror="this.style.display='none'">
            </div>
            <span class="bubble-label lang-es">${p.nameEs}</span>
            <span class="bubble-label lang-en hidden">${p.nameEn}</span>`;
        container.appendChild(el);
    });
}

// Build bubbles immediately (script runs after DOM is parsed)
buildBubbles();

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
    const raw = heroTitle.textContent.trim();
    // Wrap each word in a nowrap span so line breaks only happen between words, not mid-word
    heroTitle.innerHTML = raw.split(' ').map(word =>
        `<span style="white-space:nowrap;display:inline-block">${
            word.split('').map(ch => `<span class="hero-char" style="display:inline-block">${ch}</span>`).join('')
        }</span>`
    ).join(' ');
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

// ── Vein Scene ──
(function () {
    const bubbles = gsap.utils.toArray('.therapy-bubble');
    if (!bubbles.length) return;

    // 1. Set initial state (scale:0 handled by GSAP; opacity:0 is in CSS)
    gsap.set(bubbles, { scale: 0 });

    // 2. Background cell drift — continuous, independent of scroll
    gsap.utils.toArray('.vcell').forEach((cell, i) => {
        gsap.to(cell, {
            x: `+=${20 + i * 8}`,
            y: `+=${12 + i * 5}`,
            duration: 4 + i * 1.1,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
        });
    });

    // 3. Bubble entrance on scroll
    const entranceTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.vein-scene',
            start: 'top 72%',
            toggleActions: 'play none none reset',
            onComplete: startFloat
        }
    });

    bubbles.forEach((b, i) => {
        entranceTl.fromTo(b,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.65, ease: 'back.out(1.8)' },
            i * 0.09
        );
    });

    // 4. Idle float — unique phase per bubble
    let floatTweens = [];
    function startFloat() {
        floatTweens.forEach(t => t.kill());
        floatTweens = [];
        bubbles.forEach((b, i) => {
            const yR = 9 + (i % 3) * 5;
            const dur = 2.4 + (i % 5) * 0.55;
            floatTweens.push(
                gsap.to(b, { y: `+=${yR}`, duration: dur, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: (i * 0.38) % dur }),
                gsap.to(b, { x: `+=${(i % 2 ? 1 : -1) * (4 + (i % 4) * 2)}`, duration: dur * 1.4, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: (i * 0.22) % (dur * 1.4) })
            );
        });
    }

    // 5. Hover — scale shell
    bubbles.forEach(b => {
        b.addEventListener('mouseenter', () =>
            gsap.to(b, { scale: 1.1, duration: 0.28, ease: 'power2.out', overwrite: 'auto' })
        );
        b.addEventListener('mouseleave', () =>
            gsap.to(b, { scale: 1, duration: 0.45, ease: 'elastic.out(1, 0.5)', overwrite: 'auto' })
        );
    });

    // 6. Click — show info panel
    const panel = document.getElementById('veinInfo');
    const panelName = panel?.querySelector('.vein-info-name');
    const panelDesc = panel?.querySelector('.vein-info-desc');

    function showInfo(bubble) {
        const lang = typeof activeLang !== 'undefined' ? activeLang : 'es';
        panelName.textContent = bubble.dataset[lang === 'es' ? 'nameEs' : 'nameEn'];
        panelDesc.textContent = bubble.dataset[lang === 'es' ? 'descEs' : 'descEn'];
        panel.classList.add('active');
        panel.setAttribute('aria-hidden', 'false');
        gsap.fromTo(panel,
            { opacity: 0, y: 16, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.32, ease: 'back.out(1.4)' }
        );
    }

    function hideInfo() {
        gsap.to(panel, {
            opacity: 0, y: 16, scale: 0.96, duration: 0.22, ease: 'power2.in',
            onComplete: () => { panel.classList.remove('active'); panel.setAttribute('aria-hidden', 'true'); }
        });
    }

    bubbles.forEach(b => b.addEventListener('click', () => showInfo(b)));
    document.getElementById('veinInfoClose')?.addEventListener('click', hideInfo);
})();

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
