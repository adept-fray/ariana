let bar = document.getElementById('mobile-bar');
function mobileBar(){
  bar.classList.toggle('hide');
}
let body = document.getElementById('top');
console.log(body.scrollHeight);
window.onscroll = function(){ myfunction()  };
function myfunction(){
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    let logo = document.getElementsByClassName('logo')[0].style.display = 'none';
    let nav = document.getElementById('nav');
    nav.style.backgroundColor = '#000';
    nav.style.color = '#fff';
    nav.style.position = 'fixed';
    nav.style.top = 0;
  } else {
    let logo = document.getElementsByClassName('logo')[0].style.display = 'block';
    let nav = document.getElementById('nav');
    nav.style.backgroundColor = 'transparent';
    nav.style.color = '#fff';
    nav.style.position = 'absolute';
    nav.style.top = 0;
    nav.style.zIndex = 1;
  }
}