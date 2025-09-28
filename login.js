document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const usernameOrEmail = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.username === usernameOrEmail || u.email === usernameOrEmail);

  if (user && user.password === password) {
    alert("Login successful!");
    window.location.href = "index.html"; 
  } else {
    alert("Invalid username/email or password. Please try again.");
  }
});
