 // Wait for DOM
        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);
            
            // ========== 1. ENTRANCE ANIMATIONS (fade-up) ==========
            // Hero content & image
            gsap.from('.hero-content', { duration: 1, opacity: 0, y: 60, ease: 'power3.out' });
            gsap.from('.hero-image', { duration: 1.2, opacity: 0, scale: 0.9, x: 50, ease: 'back.out(0.6)', delay: 0.2 });
            
            // Features title + cards staggered
            gsap.from('.features-header', { duration: 0.8, opacity: 0, y: 40, scrollTrigger: { trigger: '.features', start: 'top 85%' } });
            gsap.from('.feature-card', {
                duration: 0.7,
                opacity: 0,
                // y: 50,
                stagger: 0.12,
                scrollTrigger: { trigger: '.features-grid', start: 'top 85%' }
            });
            
            // Connection section (left image + right text)
            gsap.from('.connection-visual', {
                duration: 1,
                opacity: 0,
                x: -80,
                scrollTrigger: { trigger: '.connection', start: 'top 80%' }
            });
            gsap.from('.connection-text h2', {
                duration: 0.8,
                opacity: 0,
                y: 40,
                scrollTrigger: { trigger: '.connection', start: 'top 80%' }
            });
            gsap.from('.connection-p', {
                duration: 0.8,
                opacity: 0,
                y: 30,
                delay: 0.2,
                scrollTrigger: { trigger: '.connection', start: 'top 80%' }
            });
            gsap.from('.feat-list-item', {
                duration: 0.6,
                opacity: 0,
                x: -40,
                stagger: 0.2,
                scrollTrigger: { trigger: '.feat-list', start: 'top 85%' }
            });
            
            // Install steps
            gsap.from('.steps-header', { duration: 0.8, opacity: 0, y: 30, scrollTrigger: { trigger: '.install-steps', start: 'top 85%' } });
            gsap.from('.steps-nodes .node, .steps-nodes .line', {
                duration: 0.9,
                scale: 0,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: { trigger: '.steps-progress-container', start: 'top 85%' }
            });
            gsap.from('.step-card', {
                duration: 0.7,
                opacity: 0,
                
                stagger: 0.15,
                scrollTrigger: { trigger: '.steps-grid', start: 'top 85%' }
            });
            
            // CTA section
            gsap.from('.cta-main', {
                duration: 0.9,
                opacity: 0,
                scale: 0.96,
                scrollTrigger: { trigger: '.cta', start: 'top 80%' }
            });
            gsap.from('.cta-content .hero-title, .cta-sub', {
                duration: 0.7,
                opacity: 0,
                y: 30,
                stagger: 0.2,
                scrollTrigger: { trigger: '.cta-main', start: 'top 80%' }
            });
            gsap.from('.img-back, .img-front', {
                duration: 0.8,
                opacity: 0,
                x: 50,
                scrollTrigger: { trigger: '.cta-main', start: 'top 80%' }
            });
            
            // Testimonials grid cards
            gsap.from('.testimonials-header', { duration: 0.7, opacity: 0, y: 30, scrollTrigger: { trigger: '.testimonials', start: 'top 85%' } });
            gsap.from('.testimonials-grid .testimonial-card', {
                duration: 0.6,
                opacity: 0,
                // y: 40,
                stagger: 0.1,
                scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%' }
            });
            gsap.from('.testimonials-bottom .testimonial-fade', {
                duration: 0.7,
                opacity: 0,
                y: 50,
                stagger: 0.15,
                scrollTrigger: { trigger: '.testimonials-bottom', start: 'top 88%' }
            });
            
            // Footer CTA
            gsap.from('.footer-cta-content', {
                duration: 0.9,
                opacity: 0,
                x: -60,
                scrollTrigger: { trigger: '.footer-cta', start: 'top 85%' }
            });
            gsap.from('.footer-cta-image', {
                duration: 0.9,
                opacity: 0,
                x: 60,
                scrollTrigger: { trigger: '.footer-cta', start: 'top 85%' }
            });
            gsap.from('.app-btn', {
                duration: 0.5,
                opacity: 0,
                scale: 0.9,
                stagger: 0.1,
                scrollTrigger: { trigger: '.footerbtn', start: 'top 90%' }
            });
            
            // ========== 2. HOVER ENHANCEMENTS (extra smoothness) ==========
            // Already have CSS hover effects, but adding subtle GSAP pulse for buttons
            document.querySelectorAll('.btn-primary, .app-btn, .see-more-wrap').forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    gsap.to(btn, { duration: 0.2, scale: 1.02, y: -2, ease: 'power1.out' });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { duration: 0.3, scale: 1, y: 0, ease: 'power1.out' });
                });
            });
            
            // Feature cards hover pulse
            document.querySelectorAll('.feature-card, .testimonial-card, .step-card, .feat-list-item').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, { duration: 0.25, boxShadow: '0 20px 30px rgba(0,0,0,0.12)', ease: 'power2.out' });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { duration: 0.3, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1), -3px -3px 10px #FFFFFF', ease: 'power2.out' });
                });
            });
            
            // ========== 3. SCROLL-TRIGGERED PARALLAX / PROGRESSIVE REVEAL ==========
            // Hero image subtle parallax on scroll
            gsap.to('.hero-img', {
                y: 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.8
                }
            });
            
            // Connection image parallax
            gsap.to('.connection-visual img', {
                y: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.connection',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.6
                }
            });
            
            // CTA button floating animation on scroll
            gsap.to('.cta-button .btn-primary', {
                y: 8,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });
            
            // Nodes line drawing animation on scroll
            ScrollTrigger.create({
                trigger: '.steps-progress-container',
                start: 'top 80%',
                onEnter: () => {
                    gsap.to('.line', { duration: 0.8, width: '250px', ease: 'back.out', stagger: 0.2 });
                }
            });
            
            // Refresh scrolltrigger for dynamic content (see-more)
            ScrollTrigger.refresh();
        });
        
        // ========== SEE MORE / SEE LESS FUNCTIONALITY (preserved) ==========
       