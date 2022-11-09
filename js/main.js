let navMenuBar=document.querySelector('.nav_menubar');
let navMenu=document.querySelector('.nav_items');
let bar1=navMenuBar.querySelector('.bar_1');
let bar2=navMenuBar.querySelector('.bar_2');
let bar3=navMenuBar.querySelector('.bar_3');
navMenuBar.addEventListener('click',()=>{
  navMenu.classList.toggle('nav_hidden');
  bar1.classList.toggle('bar_1_active');
  bar2.classList.toggle('bar_2_active');
  bar3.classList.toggle('bar_3_active');
})