$(document).ready(function() {
  // any DOM manipulation must happen here
  $("#tweet-text").on("input", function() {
    const charLimit = 140;

    // Get the text from the textarea
    let inputText = $(this).val();
    let charCounter = inputText.length;
    let charRemaining = charLimit - charCounter;

    const $counterOutput = $("form output.counter");

    if (charRemaining < 0) {
      $counterOutput.addClass("counter-invalid");
    } else {
      $counterOutput.removeClass("counter-invalid");
    }

    $counterOutput.text(`${charRemaining}`);
  });

  $("form").on("submit", function(event) {
    // Get the text from the textarea
    let inputText = $("#tweet-text").val();
    const charLimit = 140;
    let charCounter = inputText.length;

    if (inputText === null || charCounter === 0 || charCounter > charLimit) {
      // Prevent form submission
      event.preventDefault();

      // Show an alert to the user
      return alert("Please enter a valid tweet within the character limit.");
    }
  });

});