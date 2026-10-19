// Demo user database
const USERS = {
  fast_user: {
    password: "fast123",
    delayMs: 0,
    accountType: "Fast Response Account",
  },
  slow_user: {
    password: "slow123",
    delayMs: 3000,
    accountType: "Slow Response Account",
  },
};

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const spinner = document.getElementById("spinner");
const spinnerText = document.getElementById("spinnerText");
const errorMessage = document.getElementById("errorMessage");

const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const welcomeMessage = document.getElementById("welcomeMessage");
const loginTimeInfo = document.getElementById("loginTimeInfo");
const accountTypeValue = document.getElementById("accountTypeValue");
const logoutBtn = document.getElementById("logoutBtn");

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}

function clearError() {
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
}

function setLoading(isLoading, delayMs) {
  loginBtn.disabled = isLoading;
  if (isLoading) {
    spinnerText.textContent =
      delayMs > 0
        ? `Logging in, please wait (${delayMs / 1000}s)...`
        : "Logging in...";
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  clearError();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const user = USERS[username];

  if (!user || user.password !== password) {
    showError("Invalid username or password.");
    return;
  }

  setLoading(true, user.delayMs);

  setTimeout(function () {
    // Store login info so items.html can optionally display who's logged in
    sessionStorage.setItem("loggedInUser", username);
    sessionStorage.setItem("accountType", user.accountType);

    window.location.href = "items.html";
  }, user.delayMs);
});

logoutBtn.addEventListener("click", function () {
  dashboardSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
  loginForm.reset();
  clearError();
});
