
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
// validate form


function validateform() {
  var name = document.forms["forum"]["full-name"].value;
  var date = document.forms["forum"]["birth-date"].value;
  var gender = document.forms["forum"]["gender"].value;
  var messages = document.forms["forum"]["messages"].value;

  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-birth-date").innerText = date;
  document.getElementById("sender-gender").innerText = gender;
  document.getElementById("sender-messages").innerText = messages;

  var frm = document.getElementsByName('forum')[0];
   frm.reset();
  
  return false;
  
}