let chess = document.getElementById("circle");
let table = document.getElementById("chess-board");
let th = document.getElementById('th');
let tr = document.getElementById('tr')
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  // console.log({
  //   top: box.top + window.pageYOffset,
  //   right: box.right + window.pageXOffset,
  //   bottom: box.bottom + window.pageYOffset,
  //   left: box.left + window.pageXOffset,
  // });

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

console.log(getCoords(th));
console.log(getCoords(chess));

document.getElementById("circle").addEventListener("click", function (e) {
  let circle = e.target;
  let rect = circle.getBoundingClientRect();
  let dx = e.pageX - rect.left,
    dy = e.pageY - rect.top;

  circle.style.background = "silver";

  document.addEventListener(
    "click",
    function handler(e) {
      circle.style.left = e.pageX - dx + "px";
      circle.style.top = e.pageY - dy + "px";
        circle.style.background = "";
        const thCord = getCoords(th);
        const chessCord = getCoords(chess);
        const tableCord = getCoords(table);
        const trCord = getCoords(tr);
      if (chessCord.left <= thCord.right) {
        circle.style.left = chessCord.left - (chessCord.left - thCord.right)+ "px";
      }
        if (chessCord.top <= trCord.bottom) {
            circle.style.top = chessCord.top - (chessCord.top - trCord.bottom) + "px";
        }
        if (chessCord.bottom >= tableCord.bottom) {
            circle.style.top = chessCord.top - (chessCord.bottom - tableCord.bottom) + "px";
        }
        if (chessCord.right >= tableCord.right) {
            circle.style.left = chessCord.left - (chessCord.right - tableCord.right) + "px";
        }
        console.log(chessCord.bottom, 'chessbottom')
        console.log(tableCord.bottom, 'bottomtable')
        console.log(chessCord.top, 'topchess')
        console.log(chessCord.bottom - tableCord.bottom)
        console.log(chessCord.top - (chessCord.bottom - tableCord.bottom))
      document.removeEventListener("click", handler, true);
      event.stopPropagation();
    },
    true
  );
});
