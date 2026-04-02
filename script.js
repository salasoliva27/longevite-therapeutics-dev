// ============================================
// PRODUCTS CONFIG
// One entry per image file in images/products/
// Drop a new photo in that folder, add an entry here — appears automatically.
// ============================================
const PRODUCTS = [
    {
        file: 'longevite.jpeg',
        nameEs: 'Longevité',
        nameEn: 'Longevité',
        descEs: 'Nuestro protocolo insignia. Combinación avanzada de coenzimas, antioxidantes y nutrientes esenciales para regeneración celular profunda, optimización mitocondrial y longevidad sostenida.',
        descEn: 'Our signature protocol. Advanced combination of coenzymes, antioxidants, and essential nutrients for deep cellular regeneration, mitochondrial optimization, and sustained longevity.',
        color: '#1A3A4A'
    },
    {
        file: 'Myers.jpg',
        nameEs: "Myers' Cocktail",
        nameEn: "Myers' Cocktail",
        descEs: 'Mezcla clásica de magnesio, calcio, complejo B y vitamina C en infusión directa. Potencia la energía celular, refuerza el sistema inmune y combate la fatiga. El punto de partida ideal.',
        descEn: 'Classic blend of magnesium, calcium, B-complex, and vitamin C in direct infusion. Boosts cellular energy, strengthens the immune system, and combats fatigue. The ideal starting point.',
        color: '#8B7040'
    },
    {
        file: 'energy.jpeg',
        nameEs: 'Energy',
        nameEn: 'Energy',
        descEs: 'Infusión diseñada para combatir el agotamiento físico y mental. Activa la producción de ATP, optimiza la función mitocondrial y restaura los niveles de energía desde adentro hacia afuera.',
        descEn: 'Infusion designed to combat physical and mental exhaustion. Activates ATP production, optimizes mitochondrial function, and restores energy levels from the inside out.',
        color: '#7A4A1A'
    },
    {
        file: 'recharge.jpeg',
        nameEs: 'Recharge',
        nameEn: 'Recharge',
        descEs: 'Recarga profunda tras esfuerzo físico intenso, viajes o períodos de alto estrés. Restaura electrolitos, hidratación celular y reservas de micronutrientes para recuperación rápida y efectiva.',
        descEn: 'Deep recharge after intense physical effort, travel, or high-stress periods. Restores electrolytes, cellular hydration, and micronutrient reserves for fast and effective recovery.',
        color: '#4A6A2A'
    },
    {
        file: 'immune.jpeg',
        nameEs: 'Immune',
        nameEn: 'Immune',
        descEs: 'Refuerzo inmunológico de acción rápida. Vitamina C, zinc y selenio en dosis terapéuticas para activar las defensas naturales y reducir la duración e intensidad de infecciones.',
        descEn: 'Fast-acting immune reinforcement. Vitamin C, zinc, and selenium at therapeutic doses to activate natural defenses and reduce the duration and intensity of infections.',
        color: '#2A4A6A'
    },
    {
        file: 'immune_plus.jpeg',
        nameEs: 'Immune+',
        nameEn: 'Immune+',
        descEs: 'Versión reforzada del protocolo Immune. Incluye glutatión y cofactores adicionales para modulación inmunológica avanzada. Ideal en temporadas de alta exposición o estados de inmunodepresión.',
        descEn: 'Enhanced version of the Immune protocol. Includes glutathione and additional cofactors for advanced immune modulation. Ideal during high-exposure seasons or immunocompromised states.',
        color: '#1A3A5A'
    },
    {
        file: 'radiance.jpeg',
        nameEs: 'Radiance',
        nameEn: 'Radiance',
        descEs: 'Terapia de luminosidad y salud cutánea. Glutatión, vitamina C y biotina en concentraciones que estimulan la síntesis de colágeno, unifican el tono de la piel y le devuelven brillo natural.',
        descEn: 'Luminosity and skin health therapy. Glutathione, vitamin C, and biotin at concentrations that stimulate collagen synthesis, unify skin tone, and restore natural radiance.',
        color: '#8A4A6A'
    },
    {
        file: 're-glow.jpeg',
        nameEs: 'Re-Glow',
        nameEn: 'Re-Glow',
        descEs: 'Rejuvenecimiento cutáneo profundo. Combinación de antioxidantes, ácido hialurónico IV y nutrientes regenerativos que revierten el daño oxidativo y restauran la firmeza y luminosidad de la piel.',
        descEn: 'Deep skin rejuvenation. Combination of antioxidants, IV hyaluronic acid, and regenerative nutrients that reverse oxidative damage and restore skin firmness and luminosity.',
        color: '#7A3A5A'
    },
    {
        file: 'long-hair.jpeg',
        nameEs: 'Long Hair',
        nameEn: 'Long Hair',
        descEs: 'Protocolo especializado para salud capilar desde adentro. Biotina, aminoácidos esenciales, zinc y silicio para fortalecer el folículo piloso, reducir la caída y estimular el crecimiento del cabello.',
        descEn: 'Specialized protocol for hair health from within. Biotin, essential amino acids, zinc, and silica to strengthen hair follicles, reduce hair loss, and stimulate hair growth.',
        color: '#6A5A2A'
    },
    {
        file: 'after-party.jpeg',
        nameEs: 'After Party',
        nameEn: 'After Party',
        descEs: 'Recuperación exprés tras una noche de celebración. Hidratación IV, vitaminas del complejo B, antiinflamatorios naturales y antioxidantes para eliminar la resaca y restaurar vitalidad en menos de una hora.',
        descEn: 'Express recovery after a night of celebration. IV hydration, B-complex vitamins, natural anti-inflammatories, and antioxidants to eliminate hangovers and restore vitality in under an hour.',
        color: '#5A2A6A'
    },
    {
        file: 'migraine.jpeg',
        nameEs: 'Migraine',
        nameEn: 'Migraine',
        descEs: 'Alivio rápido y efectivo de migraña. Magnesio IV, riboflavina y antiinflamatorios naturales que interrumpen el ciclo del dolor, reducen la intensidad del episodio y aceleran la recuperación.',
        descEn: 'Fast and effective migraine relief. IV magnesium, riboflavin, and natural anti-inflammatories that interrupt the pain cycle, reduce episode intensity, and accelerate recovery.',
        color: '#3A4A7A'
    },
    {
        file: 'pain-relief.jpeg',
        nameEs: 'Pain Relief',
        nameEn: 'Pain Relief',
        descEs: 'Manejo del dolor crónico y agudo sin fármacos convencionales. Combinación de antiinflamatorios naturales, magnesio y cofactores neuroprotectores para reducir la inflamación y el dolor de forma duradera.',
        descEn: 'Chronic and acute pain management without conventional drugs. Combination of natural anti-inflammatories, magnesium, and neuroprotective cofactors to reduce inflammation and pain durably.',
        color: '#6A3A3A'
    },
    {
        file: 'iron.jpeg',
        nameEs: 'Iron',
        nameEn: 'Iron',
        descEs: 'Reposición de hierro intravenosa para deficiencia con o sin anemia. Restaura los depósitos de ferritina, elimina la fatiga profunda y mejora el rendimiento cognitivo y físico de forma rápida.',
        descEn: 'Intravenous iron replenishment for deficiency with or without anemia. Restores ferritin stores, eliminates deep fatigue, and rapidly improves cognitive and physical performance.',
        color: '#4A3A2A'
    },
    {
        file: 'purify.jpeg',
        nameEs: 'Purify',
        nameEn: 'Purify',
        descEs: 'Purificación y limpieza profunda del organismo. Antioxidantes de amplio espectro, apoyo hepático y eliminación de toxinas acumuladas para restaurar el equilibrio interno y mejorar el bienestar general.',
        descEn: 'Deep purification and cleansing of the body. Broad-spectrum antioxidants, liver support, and elimination of accumulated toxins to restore internal balance and improve overall well-being.',
        color: '#2A5A4A'
    },
    {
        file: 'g-detox.jpeg',
        nameEs: 'G-Detox',
        nameEn: 'G-Detox',
        descEs: 'Desintoxicación potenciada con glutatión. Elimina toxinas liposolubles, metales pesados y subproductos del estrés oxidativo. Protege el hígado y restaura la capacidad antioxidante endógena.',
        descEn: 'Glutathione-powered detoxification. Eliminates fat-soluble toxins, heavy metals, and oxidative stress byproducts. Protects the liver and restores endogenous antioxidant capacity.',
        color: '#3A5A3A'
    },
    {
        file: 'd-dtox.jpeg',
        nameEs: 'D-Dtox',
        nameEn: 'D-Dtox',
        descEs: 'Desintoxicación reforzada con vitamina D3 en dosis terapéuticas. Regula la respuesta inmune, reduce la inflamación sistémica y apoya la salud ósea, hormonal y metabólica a nivel profundo.',
        descEn: 'Detoxification reinforced with vitamin D3 at therapeutic doses. Regulates the immune response, reduces systemic inflammation, and supports bone, hormonal, and metabolic health at a deep level.',
        color: '#7A6A1A'
    },
    {
        file: 'detox-hepatico.jpeg',
        nameEs: 'Detox\nHepático',
        nameEn: 'Hepatic\nDetox',
        descEs: 'Protocolo especializado de depuración hepática. Silimarina, glutatión, fosfolípidos y cofactores enzimáticos que regeneran el tejido del hígado, mejoran su función y optimizan la eliminación de toxinas.',
        descEn: 'Specialized liver cleansing protocol. Silymarin, glutathione, phospholipids, and enzymatic cofactors that regenerate liver tissue, improve its function, and optimize toxin elimination.',
        color: '#5A4A1A'
    },
    {
        file: 'redox.jpeg',
        nameEs: 'Redox',
        nameEn: 'Redox',
        descEs: 'Equilibrio redox celular avanzado. Restaura el balance entre oxidantes y antioxidantes a nivel mitocondrial, protege el ADN del daño oxidativo y optimiza la señalización celular para longevidad.',
        descEn: 'Advanced cellular redox balance. Restores the balance between oxidants and antioxidants at the mitochondrial level, protects DNA from oxidative damage, and optimizes cellular signaling for longevity.',
        color: '#2A2A5A'
    }
];

function buildShelf() {
    const container = document.querySelector('.therapy-shelf');
    if (!container || !PRODUCTS.length) return;

    PRODUCTS.forEach((p) => {
        const box = document.createElement('div');
        box.className = 'therapy-box';
        const nameEs = p.nameEs.replace('\n', '<br>');
        const nameEn = p.nameEn.replace('\n', '<br>');
        box.innerHTML = `
            <div class="box-frame">
                <img src="images/products/${p.file}" alt="${p.nameEs}" class="box-img" loading="lazy">
                <div class="box-overlay">
                    <p class="box-desc lang-es">${p.descEs}</p>
                    <p class="box-desc lang-en hidden">${p.descEn}</p>
                </div>
            </div>
            <div class="box-label">
                <span class="lang-es">${nameEs}</span>
                <span class="lang-en hidden">${nameEn}</span>
            </div>`;
        container.appendChild(box);
    });
}

buildShelf();

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
// CONDITIONS PILL — single-select with shared detail panel
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const panel     = document.getElementById('condition-detail-panel');
    const imgEl     = document.getElementById('condition-detail-img');
    const numEl     = document.getElementById('condition-detail-num');
    const titleEl   = document.getElementById('condition-detail-title');
    const textEl    = document.getElementById('condition-detail-text');

    function isSpanish() {
        return document.documentElement.lang === 'es' ||
               !document.querySelector('.lang-es')?.classList.contains('hidden');
    }

    document.querySelectorAll('.condition-item').forEach(item => {
        item.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');

            // Deactivate all pills
            document.querySelectorAll('.condition-item').forEach(i => i.classList.remove('active'));

            if (wasActive) {
                // Second click on same pill — close panel
                panel.classList.remove('open');
                return;
            }

            item.classList.add('active');

            // Pull data from the pill
            const num   = item.querySelector('.condition-num')?.textContent.trim() || '';
            const nameEs = item.querySelector('.condition-name .lang-es')?.textContent.trim() || '';
            const nameEn = item.querySelector('.condition-name .lang-en')?.textContent.trim() || '';
            const descEs = item.querySelector('.condition-description .lang-es')?.textContent.trim() || '';
            const descEn = item.querySelector('.condition-description .lang-en')?.textContent.trim() || '';
            const img    = item.dataset.img || '';

            const lang = isSpanish();
            numEl.textContent   = num;
            titleEl.textContent = lang ? nameEs : nameEn;
            textEl.textContent  = lang ? descEs : descEn;

            if (img) {
                imgEl.src = img;
                imgEl.alt = lang ? nameEs : nameEn;
                imgEl.style.display = 'block';
                panel.querySelector('.condition-detail-img-wrap').style.display = 'block';
            } else {
                panel.querySelector('.condition-detail-img-wrap').style.display = 'none';
            }

            panel.classList.add('open');

            // Scroll panel into view smoothly
            setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
        });
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
            const yR  = 5 + (i % 4) * 2.5;          // 5–12.5 px, subtle
            const dur = 3.0 + (i % 7) * 0.45;        // 3.0–5.7 s, slow & varied
            const xR  = 2 + (i % 4);                  // 2–5 px horizontal drift
            floatTweens.push(
                gsap.to(b, { y: `+=${yR}`, duration: dur, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: (i * 0.41) % dur }),
                gsap.to(b, { x: `+=${(i % 2 ? 1 : -1) * xR}`, duration: dur * 1.7, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: (i * 0.19) % (dur * 1.7) })
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

    // 6. Click — open modal bubble at scene center
    const veinScene = document.querySelector('.vein-scene');

    const modal = document.createElement('div');
    modal.className = 'bubble-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
        <div class="bubble-modal-inner">
            <span class="bubble-modal-name"></span>
            <div class="bubble-modal-rule"></div>
            <p class="bubble-modal-desc"></p>
        </div>`;
    veinScene.appendChild(modal);
    gsap.set(modal, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

    let modalOpen = false;

    function openModal(bubble) {
        const lang = typeof activeLang !== 'undefined' ? activeLang : 'es';
        modal.querySelector('.bubble-modal-name').textContent = bubble.dataset[lang === 'es' ? 'nameEs' : 'nameEn'];
        modal.querySelector('.bubble-modal-desc').textContent  = bubble.dataset[lang === 'es' ? 'descEs'  : 'descEn'];
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        modalOpen = true;
        gsap.to(modal, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.5)', overwrite: true });
    }

    function closeModal() {
        modalOpen = false;
        modal.setAttribute('aria-hidden', 'true');
        gsap.to(modal, {
            scale: 0, opacity: 0, duration: 0.28, ease: 'back.in(1.2)', overwrite: true,
            onComplete: () => modal.classList.remove('active')
        });
    }

    modal.addEventListener('click', closeModal);

    bubbles.forEach(b => {
        b.addEventListener('click', () => {
            modalOpen ? closeModal() : openModal(b);
        });
    });
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
            { yPercent: -25 },
            {
                yPercent: -5,
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
