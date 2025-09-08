import { AfterViewInit, Component, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-about-me',
    imports: [],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  platformId = inject(PLATFORM_ID);
  
  private roles = [
    'Software Developer',
    'Frontend Specialist', 
    'Problem Solver',
    'Angular Developer',
    'UI/UX Enthusiast'
  ];
  
  private currentRoleIndex = 0;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeAnimations();
      this.startTypewriterEffect();
      this.setupScrollAnimations();
    }
  }

  private initializeAnimations(): void {
    // Initial page load animations
    const tl = gsap.timeline();

    // Animate greeting
    tl.fromTo('.greeting-bubble', 
      { 
        scale: 0, 
        opacity: 0, 
        y: -50 
      },
      { 
        scale: 1, 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      }
    );

    // Animate typing indicator
    tl.fromTo('.typing-indicator', 
      { 
        opacity: 0, 
        x: -20 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5 
      }, 
      "-=0.3"
    );

    // Animate name letters with stagger
    tl.fromTo('.letter', 
      { 
        y: 100, 
        opacity: 0, 
        rotationX: -90 
      },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0, 
        duration: 0.8, 
        ease: "back.out(1.7)",
        stagger: {
          amount: 1,
          from: "start"
        }
      }, 
      "-=0.5"
    );

    // Animate role container
    tl.fromTo('.role-container', 
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out" 
      }, 
      "-=0.5"
    );

    // Animate CTA buttons
    tl.fromTo('.cta-buttons button', 
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: "power2.out",
        stagger: 0.2
      }, 
      "-=0.3"
    );

    // Animate image container
    tl.fromTo('.image-container', 
      { 
        scale: 0.8, 
        opacity: 0, 
        x: 100 
      },
      { 
        scale: 1, 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power2.out" 
      }, 
      "-=1"
    );

    // Animate floating stats
    tl.fromTo('.stat-card', 
      { 
        scale: 0, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6, 
        ease: "back.out(1.7)",
        stagger: 0.2
      }, 
      "-=0.5"
    );

    // Animate scroll indicator
    tl.fromTo('.scroll-indicator', 
      { 
        y: 20, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8 
      }, 
      "-=0.3"
    );

    // Add continuous floating animation to image
    gsap.to('.image-container', {
      y: -20,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // Letter hover animations
    gsap.utils.toArray('.letter').forEach((letter: any) => {
      letter.addEventListener('mouseenter', () => {
        gsap.to(letter, {
          scale: 1.3,
          rotation: 10,
          color: '#3b82f6',
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });

      letter.addEventListener('mouseleave', () => {
        gsap.to(letter, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }

  private startTypewriterEffect(): void {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    const typeRole = () => {
      const currentRole = this.roles[this.currentRoleIndex];
      let charIndex = 0;
      
      // Clear existing text
      typewriterElement.textContent = '';
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentRole.length) {
          typewriterElement.textContent += currentRole.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          
          // Wait before erasing
          setTimeout(() => {
            this.eraseRole(typewriterElement);
          }, 2000);
        }
      }, 100);
    };

    const eraseRole = (element: HTMLElement) => {
      const currentText = element.textContent || '';
      let charIndex = currentText.length;
      
      const eraseInterval = setInterval(() => {
        if (charIndex > 0) {
          element.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          clearInterval(eraseInterval);
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
          
          // Wait before typing next role
          setTimeout(() => {
            typeRole();
          }, 500);
        }
      }, 50);
    };

    // Start typewriter effect
    setTimeout(() => {
      typeRole();
    }, 2000);
  }

  private eraseRole(element: HTMLElement): void {
    const currentText = element.textContent || '';
    let charIndex = currentText.length;
    
    const eraseInterval = setInterval(() => {
      if (charIndex > 0) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        clearInterval(eraseInterval);
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        
        // Wait before typing next role
        setTimeout(() => {
          this.startTypewriterEffect();
        }, 500);
      }
    }, 50);
  }

  private setupScrollAnimations(): void {
    // Parallax effect for floating shapes
    gsap.utils.toArray('.shape').forEach((shape: any, index: number) => {
      gsap.to(shape, {
        y: -100 * (index + 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Scroll-triggered animations for stats
    gsap.utils.toArray('.stat-card').forEach((card: any, index: number) => {
      gsap.fromTo(card,
        {
          y: 50,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Background animation based on scroll
    gsap.to('.animated-bg', {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 2
      }
    });
  }
}
