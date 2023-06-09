(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-cl");
  let equal = document.querySelector(".btn-eq");
  let pi = document.querySelector(".btn-pi");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer + " ";
    }
  });
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
  pi.addEventListener("click", function (e) {
    screen.value += "3.14159";
  });
})();
