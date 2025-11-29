// main.js - Chuyển đổi danh sách nav khi nhấn nút header-bars

const barsBtn = document.querySelector(".header-bars");
const navList = document.querySelector(".header_nav-list");

// Chuyển đổi hiển thị danh sách nav khi nhấn nút bars
if (barsBtn && navList) {
  barsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = navList.style.display !== "none";
    navList.style.display = isVisible ? "none" : "block";
  });
}

// Đóng nav khi click bên ngoài
document.addEventListener("click", (e) => {
  if (navList && barsBtn) {
    const isClickedOnNav = navList.contains(e.target);
    const isClickedOnBtn = barsBtn.contains(e.target);
    if (!isClickedOnNav && !isClickedOnBtn) {
      navList.style.display = "none";
    }
  }
});
// mở modal đăng kí
function openRegister() {
  const modal = document.getElementById("register-modal");
  if (modal) {
    modal.style.display = "flex";
  } else {
    console.error("Lỗi: Không tìm thấy modal ID 'register-modal'");
  }
}
// modal đăng kí
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function (check) {
  check.preventDefault();
  const email = document.getElementById("email").value;
  const pwd = document.getElementById("pwd").value;
  const cf_pwd = document.getElementById("cf_pwd").value;

  const check_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!check_email.test(email)) {
    alert("Email không đúng định dạng. Ví dụ: abc@gmail.com");
    return;
  }
  if (pwd !== cf_pwd) {
    alert("Mật khẩu không khớp!");
    return;
  }
  if (pwd.length < 8) {
    alert("Mật khẩu quá ngắn! Vui lòng nhập ít nhất 8 ký tự.");
    return;
  }

  // test demo
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find((u) => u.email == email);
  if (exists) {
    alert("Email đã được đăng ký.");
    return;
  }
  alert(`Đăng ký thành công.`);
  closeModal();
  const userName = email.split("@")[0];
  const newUser = { email: email, username: userName, password: pwd };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));
});
console.log(JSON.parse(localStorage.getItem("users")));

// Tắt modal
function closeModal() {
  const modal = document.getElementById("register-modal");
  if (modal) {
    modal.style.display = "none";
  }
}
// Click ra ngoài để tắt modal
window.onclick = function (close) {
  const modal = document.getElementById("register-modal");
  if (close.target == modal) {
    modal.style.display = "none";
  }
};
