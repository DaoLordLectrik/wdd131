function toggleMenu() {
    const mobileLinks = document.getElementById('mobile-links');
    if (mobileLinks.style.display === 'flex') {
      mobileLinks.style.display = 'none';
    } else {
      mobileLinks.style.display = 'flex';
    }
  }
  

  /* Footer information*/
const currentYear = new Date().getFullYear();
  
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Fiifi C Debrah`;
  
const lastModifiedDate = document.lastModified;
  
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;