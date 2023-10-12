$(document).ready(function() {
  // any DOM manipulation must happen here
  $("#tweet-text").on("input", function() {
    // Get the text from the textarea
    let inputText = $(this).val();

    const charLimit = 140;
    let charCounter = inputText.length;
    let charRemaining = charLimit - charCounter;

    // Changes the characters remaining being shown on screen
    $('.counter').text(`${charRemaining}`);
  });

});