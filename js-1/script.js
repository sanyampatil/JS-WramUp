var rect=document.querySelector("#center")
rect.addEventListener("mousemove",function(details){
    var rectanglelacation= rect.getBoundingClientRect();
    var insidereactval=details.clientX-rectanglelacation.left
    if(insidereactval<rectanglelacation.width/2){
        var redcolor =gsap.utils,maprange(`a`)
    }
})

/*const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {

  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  }
}
document.querySelector(".center").addEventListener("mousemove", throttleFunction((dets) => {
  console.log("button is clicked");
  var div = document.createElement("div")
  div.classList.add("imgdiv")
  div.style.left = dets.clientX + 'px';
  div.style.top = dets.clientY + 'px';
  var img = document.createElement("img")
  img.setAttribute("src","https://plus.unsplash.com/premium_photo-1687326937329-d39fa429f147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")
  div.appendChild(img);
  document.body.appendChild(div);

  gsap.to(img,{
    y:"0",
    ease:power1,
    duration:.6
  });

  gsap.to(img,{
    y:"100%",
    delay:.6,
    ease:pewer2
  })

setTimeout(function(){
    div.remove()
  },1000)

}, 400));   */