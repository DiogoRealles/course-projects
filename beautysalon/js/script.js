import initYearFooter from "./modules/initYearFooter.js";
import initBackToTop from "./modules/initBackToTop.js";
import initScrollReveal from "./modules/initScrollReveal.js";
import initActivateMenuAtCurrentSection from "./modules/initActivateMenuAtCurrentSection.js";
import initChangeHeaderWhenScroll from "./modules/initChangeHeaderWhenScroll.js";
import initMenu from "./modules/initMenu.js";

initScrollReveal();
initYearFooter();
initMenu();
window.addEventListener('scroll', () => {
  initChangeHeaderWhenScroll()
  initBackToTop();
  initActivateMenuAtCurrentSection();
});

