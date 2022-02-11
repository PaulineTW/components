var acc = document.getElementsByClassName("item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "open" class,
    to highlight the button that controls the panel */
    this.classList.toggle("open");
  });
}