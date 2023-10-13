const ele=document.querySelector("div");
 ele.addEventListener("mouseover",()=>{
    ele.style.left=randompos()+"%";
    ele.style.top=randompos()+"%";
 })

 function randompos(){
     return Math.floor(Math.random()*89);
 }