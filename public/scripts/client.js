/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Preventing XSS
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweetObj) {
    let $tweet = $(`<article class="tweet">
    <header>
      <div class="profile">
        <img src="${tweetObj.user.avatars}" />
        <h5>${tweetObj.user.name}</h5>
        </div>
      <h5 class="handle">${tweetObj.user.handle}</h5>
    </header>
    <p class="tweet-content">${escape(tweetObj.content.text)}</p>
    <footer>
      <h6>${timeago.format(tweetObj.created_at)}</h6>
      <h6>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </h6>
    </footer>
  </article>`);

    return $tweet;
  };

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (const tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $('.tweet-container').append($tweet);
    }
  };

  /**
   * Handle the Submit button
   */

  $("form").on("submit", function(event) {
    event.preventDefault();
    let serializedData = $(this).serialize();
    console.log(serializedData);

    $.post("/tweets", serializedData).done(() => {
      $("#tweet-text").val("");
      $("form output.counter").text("140");

      // load the tweets when the new tweet is submitted
      loadTweets();
    });
  });




  const loadTweets = function() {
    // Use jQuery to make a GET request to /tweets and receive the array of tweets as JSON
    $.ajax('/tweets', { method: 'GET' })
      .then(function(tweetData) {
        // Success path


        console.log('Success: ', tweetData);
        renderTweets(tweetData); // Pass the JSON data directly to renderTweets
      });


  };

  loadTweets();

});

