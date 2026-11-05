const scriptURL =
  "https://script.google.com/macros/s/AKfycbwIvqid807LerXrdDALBLmyfFVxMuvsG_LcRQhZIZeN8wEM6g4iyje5cnf8i8dK6iyOtA/exec";
const form = document.forms["submit_to_google_sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => response.json())
    .then((response) => {
      msg.innerHTML = "Thank You for Subscribing!✅";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
