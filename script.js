const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", function () {
  const signInButton = document.getElementById("signIn");
  const signUpButton = document.getElementById("signUp");
  const container = document.getElementById("container");

  signInButton.addEventListener("click", function () {
    container.classList.remove("right-panel-active");
  });

  signUpButton.addEventListener("click", function () {
    container.classList.add("right-panel-active");
  });

  const signupForm = document.getElementById("signup-form");
  const signinForm = document.getElementById("signin-form");
  const errorMessage = document.getElementById("error-message");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // Điều kiện đơn giản để kiểm tra dữ liệu
    if (!username || !email || !password) {
      errorMessage.textContent = "Vui lòng điền đầy đủ thông tin";
      return;
    }

    // Xử lý đăng ký dữ liệu tại đây (có thể gửi yêu cầu AJAX đến máy chủ)
  });

  signinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameOrEmail = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;

    // Điều kiện đơn giản để kiểm tra dữ liệu
    if (!usernameOrEmail || !password) {
      errorMessage.textContent = "Vui lòng điền đầy đủ thông tin";
      return;
    }

    // Xử lý đăng nhập dữ liệu tại đây (có thể gửi yêu cầu AJAX đến máy chủ)
  });
});
