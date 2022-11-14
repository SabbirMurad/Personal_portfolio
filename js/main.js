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
let closeIcon=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"/></svg>
`;
let activeIcon=`
<svg class="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/></svg>
`;
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
})