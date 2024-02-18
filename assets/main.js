// main.js

// ARRAY OF SLIDES
let slides = ['1-hello', '2-world'];
let max = slides.length;
let currentSlide = 0;

// CLICK NEXT BUTTON
$('#nextButton').on('click', function() {
  $('#previousButton').removeAttr('disabled');
  currentSlide++;
  window.location.hash = currentSlide;
  if (currentSlide == max) {
    $('#nextButton').attr('disabled', 'disabled');
  }
});

// CLICK PREVIOUS BUTTON
$('#previousButton').on('click', function() {
  $('#nextButton').removeAttr('disabled');
  currentSlide--;
  window.location.hash = currentSlide;
  if (currentSlide == 0) {
    $('#previousButton').attr('disabled', 'disabled');
  }
});



// Function to handle hash changes
function handleHashChange() {
  var hash = window.location.hash.substring(1); // Remove the '#' symbol
  console.log(hash);
  currentSlide = hash;

  if (hash == '0' || hash == '') {
  $('#container').load('index.html #container', function() {
    $('#log').on('click', function() {
      console.log('slide 0');
    });
  });

  $('#previousButton').attr('disabled', 'disabled');
  $('#nextButton').removeAttr('disabled');

  } else {
    $('#previousButton').removeAttr('disabled');
    $('#container').load('slides/' + slides[hash - 1] + '.html');
    if (currentSlide == max) {
      $('#nextButton').attr('disabled', 'disabled');
    } else {
      $('#nextButton').removeAttr('disabled');
    }
  }
}

// Initial handling of the hash
handleHashChange();

// Listen for hash changes
$(window).on("hashchange", function() {
    handleHashChange();
});
