const button = document.getElementById("clicker");
const counter = document.getElementById("counter");

button.addEventListener("click", function(){
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
})
