
// check form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const resetButton = form.querySelector('input[type="reset"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const request = document.getElementById("request").value.trim();
    const subject = document.getElementById("subject").value.trim();


    if (!name) {
      alert("Request for full name");
      return;
    }

    if (!email) {
      alert("Email Entry Requirements");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if (!emailPattern.test(email)) {
      alert("Requires the correct email format");
      return;
    }

    if (!subject){
      alert("Enter subject");
      return;
    }

    if (!request) {
      alert("Content entry requirements");
      return;
    }

    alert("Thank you for contacting me! ...");
  });

  resetButton.addEventListener("click", function (event) {
    const confirmation = confirm(
      "Are you sure you want to delete all the information and re-enter it?"
    );
    if (!confirmation) {
      event.preventDefault();
    }
  });
});
// check form















