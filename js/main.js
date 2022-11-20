//toggling the menubar in mobile devicea
let navMenuBar=document.querySelector('.nav_menubar');
let navMenu=document.querySelector('.nav_items');
let bar1=navMenuBar.querySelector('.bar_1');
let bar2=navMenuBar.querySelector('.bar_2');
let bar3=navMenuBar.querySelector('.bar_3');
let showcase =document.querySelector('.showcase');
navMenuBar.addEventListener('click',()=>{
  navMenu.classList.toggle('nav_hidden');
  bar1.classList.toggle('bar_1_active');
  bar2.classList.toggle('bar_2_active');
  bar3.classList.toggle('bar_3_active');
  showcase.classList.toggle('showcase_blur');
})

//toggling the icons in mobile devices
let iconOption =document.querySelector('.nav_icon_option');
let ss=iconOption.querySelector('svg');
let navIcons =document.querySelector('.nav_icons');
let isIconActive=false;
iconOption.addEventListener('click',(e)=>{
  navIcons.classList.toggle('icon_active');
  if(isIconActive){
    iconOption.innerHTML=closeIcon;
    isIconActive=false;
  }
  else{
    iconOption.innerHTML=activeIcon;
    isIconActive=true;
  }
})

//handeling icons and menubar when clicked somewhere else
document.addEventListener('click',(e)=>{
  if(e.target!=navMenu && (!navMenuBar.contains(e.target)) && (!navMenu.contains(e.target))){
    navMenu.classList.add('nav_hidden');
    bar1.classList.remove('bar_1_active');
    bar2.classList.remove('bar_2_active');
    bar3.classList.remove('bar_3_active');
    showcase.classList.remove('showcase_blur');
  }
  if(isIconActive){
    let isOpen=true;
    for(let x of e.path){
      if(x==iconOption){
        isOpen=false;
        break;
      }
    }
    if(isOpen){
      navIcons.classList.remove('icon_active');
      iconOption.innerHTML=closeIcon;
      isIconActive=false;
    }
  }
})

// switching pages on click

let homeBtn= navMenu.querySelector('.home');
let projectBtn = navMenu.querySelector('.project');

homeBtn.addEventListener('click',()=>{
  showcase.innerHTML=homeFetch;
})
projectBtn.addEventListener('click',()=>{
  showcase.innerHTML=projectFetch;
  let items = document.querySelector('.project_items');

  for(let i=0;i<5;i++){
    let item =document.createElement('div');
    item.classList.add('item');
    item.innerHTML=`
    <img class="item_bg" src="/imgs/Screenshot 2022-11-16 130835.png" alt="">
    <div class="item_title">
      Roll Dice
    </div>
    `
    items.appendChild(item);
  }
})

//changing image on click
let totalImg=3;
let currentImg=0;
let imgContainer=document.querySelector('.image_container');
let nextBtn=imgContainer.querySelector('.next');
let preBtn=imgContainer.querySelector('.previous');
let images=imgContainer.querySelector('.images');
nextBtn.addEventListener('click',()=>{
  if(currentImg!=(totalImg-1)){
    currentImg++;
    images.style.transform=`translateX(${currentImg*-100}%)`
  }
})
preBtn.addEventListener('click',()=>{
  if(currentImg!=0){
    currentImg--;
    images.style.transform=`translateX(${currentImg*-100}%)`
  }
})