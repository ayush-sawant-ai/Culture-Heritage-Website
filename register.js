document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(user => user.email === email || user.username === username);
  if (userExists) {
    alert("Email or Username already exists. Please choose another one.");
    return;
  }

  const newUser = {
    fullname,
    email,
    username,
    password
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful! You can now login.");
  
  window.location.href = "login.html";
});
