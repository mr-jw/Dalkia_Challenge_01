
function f3(targetDate, elementId) {
  var p = new Date(); 
  var q = new Date(targetDate); 

  var variable = Math.round((q - p) / (1000 * 60 * 60 * 24));
  var variable2 = document.getElementById(elementId);
  variable2.innerText = variable;
}

f3("2025-12-25", "my-element");
f3("2026-01-01", "my-element2");
  