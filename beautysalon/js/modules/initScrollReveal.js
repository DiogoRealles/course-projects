export default function initScrollReveal(){
  ScrollReveal({
    origin: 'top',
    distance: '32px',
    duration: 700,
    reset: true,
  }).reveal(`
    #home,
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials, 
    #contact .text, #contact .links,
    footer .brand, footer .social-links
  `, {
    intervale: 100
  });
}