var elSiteNavbar = document.querySelector(".site-header__navbar");
var elHamburgBtn = document.querySelector(".site-header__btn");

elHamburgBtn.addEventListener("click",function(){
  elSiteNavbar.classList.toggle("open-menu");
  elHamburgBtn.classList.toggle("close-btn");
})