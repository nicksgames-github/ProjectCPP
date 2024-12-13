window.location.href = "fresh.html";
if (localStorage.getItem("isLoggedIn")) {
    document.getElementById("register-login-form").style.display = "none";
    document.getElementById("user-greeting").style.display = "block";
    var user = JSON.parse(localStorage.getItem("registeredUser"));
    document.getElementById("usernameSpan").innerText = user.username;
}
document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    document.getElementById("register-login-form").style.display = "block";
    document.getElementById("user-greeting").style.display = "none";
});
