let increment = document.querySelector("#increment");
let counter = document.querySelector("#counter");
let decremement = document.querySelector("#decrement");

increment.addEventListener("click", function () {
  counter.innerHTML = Number(counter.innerHTML) + 1;

  if (counter.innerHTML >= 10) {
    counter.style.color = "red";
  }
});

decrement.addEventListener("click", function () {
  if (counter.innerHTML > 0) {
    counter.innerHTML -= 1;
  }

  if (counter.innerHTML <= 10) {
    counter.style.color = "black";
  }
});
