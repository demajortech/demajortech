const display = document.querySelector('#display');

function appendDisplay(input) {
  display.value += input;
  

  // force cursor/view to the end
  display.scrollLeft = display.scrollWidth;
}
 function clearDisplay() {
  display.value=""
 }

function calculate() {
  if (display.value.trim() === "") {
    display.value = "";
    return;
  }

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }

  display.scrollLeft = display.scrollWidth;
}

  function deleteLast() {
  display.value = display.value.slice(0, -1);

  display.scrollLeft = display.scrollWidth;
}
