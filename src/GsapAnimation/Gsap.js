// src/animations.js
import gsap from 'gsap';

export const headingAnimation = (headingRef) => {
    const heading = headingRef.current;
    const chars = heading.textContent.split(''); 
    heading.innerHTML = chars.map(char => {
        return char === ' ' ? `<span class='inline-block'>&nbsp;</span>` : `<span class='inline-block'>${char}</span>`;
    }).join('');

    const timeline = gsap.timeline();
    timeline.from(heading.querySelectorAll('span'), {
        y: 50, // Start 50px below
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.05, // Each character appears with a slight delay
    });
};
