export default function initChangeHeaderWhenScroll(){
  const navHeight = header.offsetHeight;
  
  if(window.scrollY >= navHeight){
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}