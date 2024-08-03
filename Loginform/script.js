 
document.addEventListener("click", function () {
  var form = document.querySelector("#login-form");
  form.addEventListener("submit", function (event) {
    var name = document.querySelector("#name").value;
    var password = document.querySelector("#password").value;
    if (name === "" || password === "") {
      alert("Please enter name and password");
      event.preventDefault(); // Prevent the form from submitting
    }
  });
});
 