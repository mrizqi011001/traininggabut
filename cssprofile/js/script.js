// menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
//  slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imglist = document.getElementsByClassName('img-slideshow');
  if (n > imglist.length) slideIndex = 1;
  else if (n < 1) slideIndex = imglist.length;

  for (i = 0; i < imglist.length; i++) {
    imglist[i].style.display ='none';
  }
  imglist[slideIndex - 1].style.display = 'block';
}
 
setInterval(() => {
  plusDivs(1);
}, 2000)