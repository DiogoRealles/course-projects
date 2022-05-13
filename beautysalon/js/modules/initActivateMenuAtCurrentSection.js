export default function initActivateMenuAtCurrentSection(){
  const sections = document.querySelectorAll('main section[id]');
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for(const section of sections){
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd){
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
    }
  }
}