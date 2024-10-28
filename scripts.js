
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();
  //check if its sunday or saturday
  if (day == 0 ) {
    document.getElementById('display').innerHTML = "Currently closed on Sunday.";
  // check if its between 9am and 17:30pm (inclusive)
  } else if (day == 6) {
      document.getElementById('display').innerHTML = "Appointments only on Saturdays.";
  } else if (hour >= 9 && hour <= 17.5) {
    document.getElementById('display').innerHTML = "Currently open. <br> Monday - Friday | 09:30 - 17:30";
  } else {
          document.getElementById('display').innerHTML = "Currently outside business hours. <br>  Monday - Friday | 09:30 - 17:30";
  }


  // Check if the user has already agreed to the terms
window.onload = function() {
    if (!localStorage.getItem('termsAgreed')) {
        document.getElementById('terms-popup').style.display = 'flex';
    }
}

// Function to handle the "Agree" button click
function agreeToTerms() {
    localStorage.setItem('termsAgreed', 'true'); // Save agreement in local storage
    document.getElementById('terms-popup').style.display = 'none'; // Hide the popup
}



