export default function initBackToTop(){
  const backToTopButton = document.querySelector('[data-js="backToTop"]');
  
  if(scrollY >= 560){
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}