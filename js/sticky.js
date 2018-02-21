
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var body = document.getElementById("myBody");
var sticky = header.offsetTop;

//var sticky = 1;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    body.classList.add("addPadding");
  } else {
    header.classList.remove("sticky");
    body.classList.remove("addPadding");
  }
}