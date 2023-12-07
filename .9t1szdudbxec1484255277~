function barAnimation(): void{
    let element1: HTMLElement = document.querySelector("header .navbar");
    let element2: HTMLElement = document.querySelector("#bars i")
    if (element1.style.display == "block"){
        console.log(element2.className)
        element2.className = "fa fa-bars";
        element1.style.display = "none" ;
    }
    else{ 
        element1.style.display = "block";
        element2.className = "fa fa-times"; }
}

function widthChange(): void{
    const header: HTMLElement = document.querySelector("header .navbar");
    const element: HTMLElement = document.querySelector("#bars i");
    if( window.innerWidth > 700) { 
      header.style.display = "block";
    }
    else{
      header.style.display = "none";
      element.className = "fa fa-bars"
    }
  }
window.addEventListener("resize", widthChange)


let current = 1 ;
let timer = setTimeout(autoSlide, 3000);
let direction : number = 1;

function slide(target) : void {
  const container: HTMLElement= document.querySelector(".slider .container")
  const element: HTMLElement = document.querySelector(".pointer .selected")
  let n : number = 100 / 6 ; 
  let m : number = Number(target.id);

  element.className = "";
  console.log(target)
  target.className = "selected";
  container.style.transform = `translateX(${(1-m)*n}%)`
  clearTimeout(timer);
  timer = setTimeout(autoSlide, 3000)
  
}
const pointers = document.querySelectorAll(".pointer li")
for(let i=0; i < pointers.length; i++){
  pointers[i].addEventListener("click", (event) => {
    slide(event.target);
})
}



function autoSlide(){
  if(current == 3 && direction == 1)   direction =-1;
  else if(current==1 && direction == -1) direction = 1;
  current += direction;
  let target = document.querySelector(`[id='${current}']`);
  slide(target)
}


const events = document.querySelectorAll("imge-box")