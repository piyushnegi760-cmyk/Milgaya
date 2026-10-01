document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

      event.preventDefault();

      alert(
        "Authentication will be connected later. Your frontend is ready."
      );

    });

  }


  if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

      event.preventDefault();

      alert(
        "Account system will be connected later. Your frontend is ready."
      );

    });

  }

});


function googleLogin() {

  alert(
    "Google authentication will be connected later."
  );

}


function logout() {

  alert(
    "Logout will be connected when authentication is added."
  );

}