// Collapsible function by adding class "open"

var acc = document.getElementsByClassName("item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("open");
  });
}