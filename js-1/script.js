console.log("hiii")
var rect = document.querySelector("#center")
rect.addEventListener("mousemove", function (details) {
  var rectangleLocation = rect.getBoundingClientRect();
  var insidereactval = details.clientX - rectangleLocation.left
  if (insidereactval < rectangleLocation.width / 2) {
      var redcolor = gsap.utils.mapRange(
      0,
      rectangleLocation.widht / 2,
      255,
      0,
      insidereactval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4
    })

  }
  else {

    var Bluecolor = gsap.utils.mapRange(
      rectangleLocation.widht/2,
-      rectangleLocation.widht,
      0,
      255,
      insidereactval
    );
    gsap.to(rect, {
      backgroundColor: `0,0,rgb(${Bluecolor})`,
      ease: Power4
    })

    
  }
})

rect.addEventListener("mouseleave",function(){
  gsap.to(rect,{
    backgroundColor:"white"
  })

})



