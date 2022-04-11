"use strict";
let acc = document.getElementsByClassName('accordion');

for(let i = 0; i < acc.length; i++){
  acc[i].addEventListener('click', function () {
    this.classList.toggle('tertiary');
    let panel = this.nextElementSibling;
    panel.style.height = null;
    let plusMinus = this.lastElementChild.classList;
    if(!plusMinus.contains('fa-plus')){
      plusMinus.remove('fa-minus');
      plusMinus.add('fa-plus');
      panel.style.height = null;
    } else {
      plusMinus.remove('fa-plus');
      plusMinus.add('fa-minus');
      panel.style.height = panel.scrollHeight + 'px';
    }
    /*
    for(let j = 0; j < acc.length; j++){
      if(this == acc[j]){
        continue;
      }
      if(acc[j].lastElementChild.classList.contains('fa-minus')){
        acc[j].lastElementChild.classList.remove('fa-minus');
        acc[j].lastElementChild.classList.add('fa-plus');
        let panel = acc[j].nextElementSibling;
        panel.style.height = null;
      }
    }
    */
  })
}