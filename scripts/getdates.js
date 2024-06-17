    // Display current year
    function displayCurrentYear() {
        const currentYear = new Date().getFullYear();
        document.getElementById('current-year').textContent = currentYear;
      }
  
      // Display the last modified date
      function displayLastModifiedDate() {
        const lastModifiedDate = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('last-modified').textContent += lastModifiedDate.toLocaleDateString(undefined, options);
      }
  

      displayCurrentYear();
      displayLastModifiedDate();