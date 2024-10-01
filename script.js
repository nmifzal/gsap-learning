var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
  });
});

imageDiv.addEventListener("mouseenter", (e) => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#e0e0e086",
  });
});
imageDiv.addEventListener("mouseleave", (e) => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 1,
  });
});