document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("forgot-password-modal");
  const closeButton = document.querySelector(".close");
  const sendButton = document.querySelector(
    '#forgot-password-form button[type="submit"]'
  );
  const form = document.getElementById("forgot-password-form");

  // Hiển thị modal khi trang tải (cho mục đích kiểm thử)
  modal.style.display = "block";

  // Ẩn modal khi người dùng nhấn nút đóng
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Xử lý sự kiện khi người dùng nhấn gửi yêu cầu
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Validate dữ liệu ở đây nếu cần thiết

    // Hiển thị thông báo hoặc thực hiện các thao tác khác ở đây
  });

  // Ngăn chặn sự kiện khi nhấp chuột bên ngoài modal
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      return false;
    }
  });
});
