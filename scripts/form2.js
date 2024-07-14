// Increment the review counter in localStorage
let reviewCount = localStorage.getItem('reviewCount');
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
localStorage.setItem('reviewCount', reviewCount);

// Display the review count
document.getElementById('reviewCount').textContent = 'You have submitted ' + reviewCount + ' reviews.';

//Footer info
const currentYear = new Date().getFullYear();
  
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Fiifi C Debrah`;
  
const lastModifiedDate = document.lastModified;
  
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;