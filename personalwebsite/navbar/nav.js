let pre=document.querySelector(".preloader");
let bar=document.querySelector(".bar");
let links=document.querySelector(".links");
let menu=document.querySelector(".menu");
let cancel=document.querySelector(".cancel");
let scroller=document.querySelector(".scroller");
let about=document.querySelector(".about");

window.addEventListener("load",function(){
   
   pre.classList.add("hide");

});
bar.addEventListener("click",function(){
    links.className="link";
   bar.style.diplay="none";;
   cancel.className="canceled"
  
})
cancel.addEventListener("click",function(){
   links.className="links";
   bar.style.display="block";
   cancel.className="cancel";
})

window.addEventListener("scroll",function(){
   let vertical=window.pageYOffset;
  let height=about.getBoundingClientRect().height;

  if(vertical<= height){
   scroller.style.display="none";
  }
  else{
   scroller.style.display="block";
  }
})
