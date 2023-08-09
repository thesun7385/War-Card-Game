// Create local variables to work with it in this file.
const {reviewData} = window;

// Select if to display the cards
const displayRowCards = document.querySelector(".row-cards");

// Create var for review cars////
const userReview= reviewData.filter(function (data) {
  return data.name;
});


///////////// Main entry /////////
// call function to display the review card
createReviewCard(userReview);


// Function to display cards
function createReviewCard(review) {
    const getAllReviews = review.map(function(data) 
      {
        return getReviewData(data);
      })
      .join("");
  
    displayRowCards.innerHTML = getAllReviews;
  }

// Get attributes from reviewDta objct
function getReviewData(data) 
{
    // Convert the rating number to stars
    const star= '★'.repeat(data.rating) + '☆'.repeat(5 - data.rating);

    const reviewDate = new Date(data.date);
    const newFormatDate = reviewDate.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    
    return `<div class="review-card">
      <div class='user-review'>
        <h4>${data.name}</h4>
        <time datetime="${data.date}">${newFormatDate}</time><br>
        <span id="rating">Rating: ${star}</span>
        <p>"${data.review}"</p>
      </div>
    </div>`;
}

// Attach event listener to "Create" button
var button = document.getElementById('create-button');

button.addEventListener('click', function() {

  const addName = document.getElementById('name').value;
  const addDate = document.getElementById('date').value;
  const addRating = parseInt(document.getElementById('rating-input').value);
  const addReview = document.getElementById('review-text').value;

  // validate a new input
  if (isNaN(addRating) || addRating < 1 || addRating > 5 || !addReview || !addName || !addDate)
  {
    alert("Sorry, Please complete all fields.");

    
  }else // if the input is valid
  {
    const newReviewObject = {
      name: addName,
      date: addDate,
      rating: addRating,
      review: addReview
  };
  
  // add a new object
  reviewData.push(newReviewObject);

  // Clear the id
  displayRowCards.innerHTML = " "

   // Display the new card immediately after adding
   createReviewCard(reviewData);

   // Clear form inputs
   document.getElementById('name').value = '';
   document.getElementById('date').value = '';
   document.getElementById('rating').value = '';
   document.getElementById('review-text').value = '';


  }


});




