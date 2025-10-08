(function () {
  const form = document.getElementById("login-form");
  const existingBtn = document.getElementById("existing");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");

  function credsExist() {
    return localStorage.getItem("username") && localStorage.getItem("password");
  }

  function updateExistingVisibility() {
    if (credsExist()) {
      existingBtn.style.display = "block";
      existingBtn.textContent = "Login as existing user";
    } else {
      existingBtn.style.display = "none";
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    usernameInput.value = "";
    passwordInput.value = "";
    rememberCheckbox.checked = false;
    updateExistingVisibility();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    updateExistingVisibility();
  });

  existingBtn.addEventListener("click", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      alert(`Logged in as ${savedUsername}`);
    }
  });
})();
