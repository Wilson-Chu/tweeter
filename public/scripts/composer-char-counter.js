$(document).ready(function() {
  // any DOM manipulation must happen here
  $("#tweet-text").on("input", function() {
    const charLimit = 140;

    // Get the text from the textarea
    let inputText = $(this).val();
    let charCounter = inputText.length;
    let charRemaining = charLimit - charCounter;

    if (charRemaining < 0) {
      $('form div output').css('color', 'red');
    } else {
      $('form div output').css('color', '#545149');
    }

    $('form div output').text(`${charRemaining}`);
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
      alert("Please enter a valid tweet within the character limit.");
    }
  });

});