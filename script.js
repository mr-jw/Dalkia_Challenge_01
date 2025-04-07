
// Arguments: target date ("2025-12-25"), element to alter (my-element).
function f3(targetDate, elementId) {
  // argument validation.
  if (typeof targetDate !== "string" || typeof elementId !== "string") {
    console.error("Both arguments must be strings.");
    return;
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(targetDate)) {
    console.error("targetDate must be in YYYY-MM-DD format.");
    return;
  }

  var q = new Date(targetDate); // target date.
  if (isNaN(q.getTime())) {
    console.error("targetDate is not a valid date.");
    return;
  }

  if (!variable2) {
    console.error(`No element found with id "${elementId}"`);
    return;
  }

  var p = new Date();  // current date.

  var variable = Math.round((q - p) / (1000 * 60 * 60 * 24));
  
  var variable2 = document.getElementById(elementId);
  variable2.innerText = variable;
}

f3("2025-12-25", "my-element");
f3("2026-01-01", "my-element3");
  