var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  gsap.to(cursor, {
    duration: 0.5,
    x: e.pageX,
    y: e.pageY,
  });
});
