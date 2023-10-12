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

});