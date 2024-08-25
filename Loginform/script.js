document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#login-form");

  form.addEventListener("submit",   (event)  =>{
    var name = document.querySelector("#name").value;
    var password = document.querySelector("#password").value;

    if (name === "" || password === "") {
      alert("Please enter your name and password");
      event.preventDefault(); // Prevent the form from submitting
    } else {
      // Store the name in localStorage
      localStorage.setItem("name", name);
      console.log("Name stored in localStorage:", name);
      localStorage.setItem("password",password);
      sessionStorage.setItem("name",name)
    
    }
  });
});
