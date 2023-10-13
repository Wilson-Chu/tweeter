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

});