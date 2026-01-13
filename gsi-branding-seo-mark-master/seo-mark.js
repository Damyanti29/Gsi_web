/* ========================================
   GSAP ScrollTrigger - Fade-in animations on scroll
======================================== */

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ========================================
// Fade-in Animations on Scroll
// ========================================

// Get all elements with fade-in class
const fadeElements = document.querySelectorAll('.fade-in');

fadeElements.forEach((element, index) => {
    // Create ScrollTrigger for each element
    gsap.fromTo(element,
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
            },
            delay: (index % 3) * 0.1, // Stagger effect for elements appearing together
        }
    );
});

// ========================================
// Special Animations for Hero Section
// ========================================

// Hero headline animation with stagger
const heroHeadlineSpans = document.querySelectorAll('.hero-headline .fade-in, .hero-headline span');

gsap.fromTo(heroHeadlineSpans,
    {
        opacity: 0,
        y: 30,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.3,
    }
);

// Jellyfish parallax effect
const jellyfish = document.querySelector('.jellyfish-img');

if (jellyfish) {
    gsap.to(jellyfish, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
    });

    // Subtle floating animation
    gsap.to(jellyfish, {
        y: '+=15',
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
    });
}

// ========================================
// Section Title Animations
// ========================================

const sectionTitles = document.querySelectorAll('.section-title');

sectionTitles.forEach((title) => {
    // Skip ecosystem title - it has its own animation
    if (title.classList.contains('ecosystem-title')) return;

    // Simple fade-in animation for section titles (preserves HTML structure)
    gsap.fromTo(title,
        {
            opacity: 0,
            y: 40,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        }
    );
});

// ========================================
// Ecosystem Section Scroll Animation
// ========================================

const ecosystemSection = document.querySelector('.ecosystem-section');
const ecosystemTitle = document.querySelector('.ecosystem-title');
const ecosystemContent = document.querySelector('.ecosystem-content');
const highlightLines = document.querySelectorAll('.highlight-line');

if (ecosystemSection && ecosystemTitle && highlightLines.length > 0) {
    // Calculate total animation steps: title + content + each line
    const totalSteps = 2 + highlightLines.length; // title appear, content appear, then each line

    // Create main timeline for ecosystem section
    const ecosystemTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ecosystemSection,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
        }
    });

    // Step 1: Title appears (first scroll - only title visible)
    ecosystemTimeline.to(ecosystemTitle, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
    });

    // Add pause for title to be alone on screen
    ecosystemTimeline.to({}, { duration: 0.5 });

    // Step 2: Content container fades in
    ecosystemTimeline.to(ecosystemContent, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
    });

    // Step 3+: Each line becomes visible then highlights
    highlightLines.forEach((line, index) => {
        // First make it visible
        ecosystemTimeline.to(line, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
        });

        // Then highlight it (turn white)
        ecosystemTimeline.to(line, {
            color: '#FFFFFF',
            duration: 0.5,
            ease: 'power2.out',
        });

        // Small pause between lines
        if (index < highlightLines.length - 1) {
            ecosystemTimeline.to({}, { duration: 0.3 });
        }
    });

    // Hold at the end
    ecosystemTimeline.to({}, { duration: 0.5 });
}

// ========================================
// Card Entrance Animations
// ========================================

// SEO Cards
const seoCards = document.querySelectorAll('.seo-card');

seoCards.forEach((card, index) => {
    const isLeft = card.classList.contains('seo-card-left');
    const isReverse = card.classList.contains('seo-card-reverse');

    const xOffset = isLeft ? -50 : (isReverse ? 50 : -50);

    gsap.fromTo(card,
        {
            opacity: 0,
            x: xOffset,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        }
    );
});

// Marketing Cards with stagger
const marketingCards = document.querySelectorAll('.marketing-card');

gsap.fromTo(marketingCards,
    {
        opacity: 0,
        y: 40,
        scale: 0.95,
    },
    {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.marketing-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
        },
    }
);

// ========================================
// Stats Cards Animation
// ========================================

const statCards = document.querySelectorAll('.stat-card');

statCards.forEach((card, index) => {
    gsap.fromTo(card,
        {
            opacity: 0,
            y: 30,
            scale: 0.9,
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: 0.8 + (index * 0.15),
            ease: 'back.out(1.7)',
        }
    );
});

// ========================================
// CTA Button Hover Effect
// ========================================

const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
    ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
    });
}

// ========================================
// Smooth scroll for anchor links (native)
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Process Flow Animation
// ========================================

const processCards = document.querySelectorAll('.process-card');
const processArrows = document.querySelectorAll('.process-arrow, .process-arrow-vertical');
const processFlow = document.querySelector('.process-flow');

if (processFlow && processCards.length > 0) {
    // Create main timeline for process flow
    const processTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: processFlow,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
        }
    });

    // Animate cards with stagger based on data-step
    const sortedCards = Array.from(processCards).sort((a, b) => {
        return parseInt(a.dataset.step) - parseInt(b.dataset.step);
    });

    sortedCards.forEach((card, index) => {
        processTimeline.fromTo(card,
            {
                opacity: 0,
                y: 40,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: 'power3.out',
            },
            index * 0.15
        );
    });

    // Animate arrows - add active class for CSS animation
    processArrows.forEach((arrow, index) => {
        const step = parseInt(arrow.dataset.step) || index;
        processTimeline.add(() => {
            arrow.classList.add('active');
        }, step * 0.15 + 0.1);
    });

    // Add floating animation to cards
    processCards.forEach((card, index) => {
        gsap.to(card, {
            y: '+=5',
            duration: 2 + (index * 0.2),
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: index * 0.1,
        });
    });

    // Add subtle pulse to arrows
    gsap.to('.arrow-path', {
        strokeOpacity: 0.6,
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
    });
}

console.log('✨ SEO Marketing Page - Animations Initialized');

// ========================================
// FAQ Accordion Functionality
// ========================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Check if this item is already active
        const isActive = item.classList.contains('active');

        // Close all other FAQ items (optional - for accordion behavior)
        // faqItems.forEach(otherItem => {
        //     if (otherItem !== item) {
        //         otherItem.classList.remove('active');
        //     }
        // });

        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// FAQ Items entrance animation
if (faqItems.length > 0) {
    gsap.fromTo('.faq-item',
        {
            opacity: 0,
            y: 20,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.faq-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        }
    );
}

// Testimonial Cards entrance animation
const testimonialCards = document.querySelectorAll('.testimonial-card');

if (testimonialCards.length > 0) {
    gsap.fromTo(testimonialCards,
        {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.testimonials-grid',
                start: 'top 75%',
                toggleActions: 'play none none reverse',
            },
        }
    );

    // Subtle floating animation for testimonial cards
    testimonialCards.forEach((card, index) => {
        gsap.to(card, {
            y: '+=8',
            duration: 2.5 + (index * 0.3),
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: index * 0.2,
        });
    });
}

// Testimonials Jellyfish parallax
const testimonialsJellyfish = document.querySelector('.testimonials-jellyfish');

if (testimonialsJellyfish) {
    gsap.to(testimonialsJellyfish, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
            trigger: '.testimonials-faq-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
    });
}

// ========================================
// Initialize Lucide Icons
// ========================================
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}
