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
// phần đăng nhập
const login = document.getElementById("login_on");
const regester = document.getElementById("regester_on");
const btnlogin = document.querySelectorAll(".btn_login");
const btnregester = document.querySelectorAll(".btn_regester");
const close_login = document.querySelector(".model_close-btn");
const menulogin = document.querySelector(".model_overlay");
console.log(btnlogin);
console.log(btnregester);
console.log(close_login);
// nut dang nhap
btnlogin.forEach((btn) => {
  btn.addEventListener("click", () => {
    login.style.display = "block";
    regester.style.display = "none";
    menulogin.style.display = "flex";
    navList.style.display = "none";
  });
});
// nut dang ky
btnregester.forEach((btn) => {
  btn.addEventListener("click", () => {
    regester.style.display = "block";
    login.style.display = "none";
    menulogin.style.display = "flex";
    navList.style.display = "none";
  });
});
// nut bo
close_login.addEventListener("click", function (e) {
  login.style.display = "none";
  login.style.display = "none";
  menulogin.style.display = "none";
});
