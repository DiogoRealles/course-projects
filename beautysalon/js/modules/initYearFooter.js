export default function initYearFooter(){
  const date = new Date();
  const year = date.getFullYear();
  let yearFooter = document.querySelector('[data-js="yearFooter"]');
  yearFooter.innerText = year;
}