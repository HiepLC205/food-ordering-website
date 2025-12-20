# 🍽️ HỆ THỐNG ĐẶT ĐỒ ĂN ONLINE - WEBFOODSHOP

## 📋 Mô tả dự án
Website đặt món ăn trực tuyến với đầy đủ chức năng:
- **Khách hàng:** Xem thực đơn, đặt món, giỏ hàng
- **Admin:** Quản lý thực đơn (thêm, sửa, xóa món ăn)
- **Admin:** Quản lý danh mục món ăn (11 danh mục)
- **Admin:** Quản lý tài khoản người dùng
- Phân quyền admin và user

## 🛠️ Công nghệ sử dụng
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** PHP
- **Database:** MySQL
- **Server:** XAMPP (Apache + MySQL)

---

## 📦 Yêu cầu cài đặt

### 1. Cài đặt XAMPP
- Tải XAMPP từ: https://www.apachefriends.org/
- Cài đặt vào thư mục mặc định (C:\xampp)
- Phiên bản khuyên dùng: XAMPP 8.0 trở lên

### 2. Kiểm tra các module cần thiết
- Apache Web Server
- MySQL Database
- PHP 7.4+

---

## 🚀 HƯỚNG DẪN CÀI ĐẶT

### Bước 1: Clone/Download dự án

# Clone từ Git (nếu có)
git clone https://github.com/kai-tuhoc/webfoodshop-oder.git

**Lưu ý:** Tên thư mục phải là `webfoodshop-oder` (giống trong code)

### Bước 2: Khởi động XAMPP
1. Mở **XAMPP Control Panel**
2. Click **Start** cho **Apache**
3. Click **Start** cho **MySQL**
4. Đảm bảo cả 2 đều có nền màu xanh

### Bước 3: Tạo Database
1. Mở trình duyệt, truy cập: `http://localhost/phpmyadmin`
2. Click **New** (Mới) ở thanh bên trái
3. Nhập tên database: `website`
4. Chọn **Collation:** `utf8mb4_general_ci`
5. Click **Create** (Tạo)

### Bước 4: Import dữ liệu
1. Click vào database `website` vừa tạo
2. Click tab **Import** (Nhập)
3. Click **Choose File** (Chọn file)
4. Chọn file `database.sql` trong thư mục dự án
5. Click **Go** (Thực hiện) ở cuối trang
6. Chờ thông báo "Import has been successfully finished"

**File database.sql đã bao gồm:**
- ✅ 3 bảng: `accounts`, `categories`, `products`
- ✅ 7 tài khoản mẫu (bao gồm admin)
- ✅ 11 danh mục món ăn
- ✅ 64 món ăn có sẵn với đầy đủ thông tin

**Không cần tạo thủ công!** Chỉ cần import file `database.sql` là xong.

### Bước 5: Cấu hình kết nối Database (nếu cần)
Các file PHP đã được cấu hình kết nối đến database `website`:
```php
// Trong file connect.php hoặc các file PHP
$conn = new mysqli("localhost", "root", "", "website");
```

**Thông tin mặc định:**
- Host: `localhost`
- Username: `root`
- Password: `` (để trống)
- Database: `website`

**⚠️ Quan trọng:** Nếu bạn đổi tên database, phải sửa lại trong TẤT CẢ file PHP!

### Bước 6: Chạy dự án
1. Đảm bảo Apache và MySQL đang chạy trong XAMPP
2. Mở trình duyệt
3. Truy cập các trang:
   - **Trang chủ (Khách hàng):** `http://localhost/webfoodshop-oder/index.php`
   - **Trang đăng nhập:** `http://localhost/webfoodshop-oder/login.php`
   - **Trang quản trị (Admin):** `http://localhost/webfoodshop-oder/admin.php`
   - **Giỏ hàng:** `http://localhost/webfoodshop-oder/basket.php`

---

## 👤 Tài khoản đăng nhập có sẵn

### Admin (Quản trị viên)
- **Username:** `admin`
- **Password:** `7943223b45b4538b624d` (đã mã hóa) `123456789` (chưa mã hóa)
- **Quyền:** Quản lý toàn bộ hệ thống, quản lý món ăn, quản lý tài khoản

### User (Người dùng)
Các tài khoản user có sẵn:
- **Username:** `vuong` | **Password:** `7943223b45b4538b624d`
- **Username:** `hiep` | **Password:** `b0eeaa8a70a706c1f84e`
- **Username:** `khai` | **Password:** `b0eeaa8a70a706c1f84e`
- **Quyền:** Xem thực đơn, đặt món ăn, quản lý giỏ hàng

**Lưu ý:** Mật khẩu đã được mã hóa trong database. Nếu cần đổi mật khẩu, sử dụng chức năng "Đổi mật khẩu" trong trang admin.

---

## 📁 Cấu trúc thư mục
```
webfoodshop-oder/
│
├── 📂 css/                    # Thư mục chứa file CSS
│   ├── basket.css             # Style trang giỏ hàng
│   ├── chinhsua.css           # Style trang admin
│   ├── style.css              # Style trang chính
│   └── styler.css             # Style bổ sung
│
├── 📂 images/                 # Thư mục chứa ảnh món ăn (64 ảnh)
│   ├── cahoi.webp
│   ├── sashimicatam.webp
│   ├── bodatvang.webp
│   ├── combo2.webp
│   └── ... (61 ảnh khác)
│
├── 📂 git/                    
│
├── 📄 index.php               # Trang chủ - Hiển thị thực đơn
├── 📄 admin.php               # Trang quản trị (Admin only)
├── 📄 login.php               # Trang đăng nhập
├── 📄 logout.php              # Xử lý đăng xuất
├── 📄 register.php            # Trang đăng ký tài khoản
├── 📄 basket.php              # Trang giỏ hàng
├── 📄 connect.php             # Kết nối database
├── 📄 update.php              # Xử lý cập nhật dữ liệu
├── 📄 main.js                 # JavaScript chính
│
└── 📄 database.sql            # File backup database
```

### Mô tả chức năng các file:
| File | Chức năng |
|------|-----------|
| `index.php` | Hiển thị thực đơn, lọc theo danh mục, thêm vào giỏ hàng |
| `admin.php` | Quản lý món ăn, danh mục, tài khoản (chỉ admin) |
| `login.php` | Xác thực đăng nhập |
| `register.php` | Đăng ký tài khoản mới |
| `basket.php` | Xem giỏ hàng, tính tổng tiền, thanh toán |
| `connect.php` | Kết nối đến database MySQL |
| `update.php` | Xử lý cập nhật thông tin (món ăn, tài khoản) |

---

## ⚠️ XỬ LÝ LỖI THƯỜNG GẶP

### Lỗi 1: "Access denied for user 'root'@'localhost'"
**Nguyên nhân:** Sai thông tin đăng nhập MySQL  
**Giải pháp:** 
- Kiểm tra lại username/password trong các file PHP
- Mặc định XAMPP: username=`root`, password=`` (trống)
- Tìm tất cả dòng: `new mysqli("localhost", "root", "", "website")`

### Lỗi 2: "Unknown database 'website'"
**Nguyên nhân:** Chưa tạo database hoặc sai tên  
**Giải pháp:** 
- Đảm bảo đã tạo database tên `website` (không phải `quan_ly_nha_hang`)
- Làm lại Bước 3 và 4

### Lỗi 3: "Table doesn't exist"
**Nguyên nhân:** Chưa import database  
**Giải pháp:** Làm lại Bước 4 (Import file `database.sql`)

### Lỗi 4: "404 Not Found" hoặc "Object not found"
**Nguyên nhân:** Sai đường dẫn thư mục  
**Giải pháp:** 
- Đảm bảo dự án nằm trong `C:\xampp\htdocs\webfoodshop-oder\`
- Tên thư mục phải chính xác: `webfoodshop-oder` (có dấu gạch ngang)
- URL đúng: `http://localhost/webfoodshop-oder/index.php`

### Lỗi 5: Ảnh không hiển thị
**Nguyên nhân:** Thiếu ảnh trong thư mục `images/`  
**Giải pháp:**
- Kiểm tra thư mục `images/` có đầy đủ 64 ảnh món ăn không
- Tên file ảnh trong database phải khớp với file thực tế
- Ví dụ: Database có `cahoi.webp` thì trong `images/` phải có file `cahoi.webp`

### Lỗi 6: Apache không start được
**Nguyên nhân:** Port 80 bị chiếm bởi ứng dụng khác (Skype, IIS, VMware...)  
**Giải pháp:**
- **Cách 1:** Đóng ứng dụng đang dùng port 80
- **Cách 2:** Đổi port Apache:
  1. Trong XAMPP Control Panel, click **Config** bên Apache
  2. Chọn **httpd.conf**
  3. Tìm `Listen 80` đổi thành `Listen 8080`
  4. Tìm `ServerName localhost:80` đổi thành `ServerName localhost:8080`
  5. Lưu lại và restart Apache
  6. Truy cập: `http://localhost:8080/webfoodshop-oder/index.php`

### Lỗi 7: CSS không load, trang trông xấu
**Nguyên nhân:** Đường dẫn CSS sai hoặc thiếu file  
**Giải pháp:**
- Kiểm tra thư mục `css/` có đủ 4 file không
- Mở Developer Tools (F12) → Console để xem lỗi
- Đảm bảo đường dẫn trong file PHP đúng: `<link rel="stylesheet" href="css/style.css">`

### Lỗi 8: Không đăng nhập được
**Nguyên nhân:** Session PHP chưa được cấu hình  
**Giải pháp:**
- Kiểm tra file `php.ini` trong XAMPP
- Tìm dòng `session.save_path` và đảm bảo thư mục tồn tại
- Restart Apache sau khi sửa

---

## 📞 Liên hệ & Hỗ trợ

### Thành viên nhóm
- **Tên:** Trương Ngọc Hiệp
- **Email:** truongngochiep16042005@gmail.com 
- **SĐT:** 0388917769


## 📝 Ghi chú quan trọng

### Dữ liệu có sẵn trong database:
- ✅ **7 tài khoản** (1 admin + 6 user)
- ✅ **11 danh mục** món ăn:
  1. Cá
  2. Sashimi
  3. Bò
  4. Súp
  5. Hải sản
  6. Gà-Vịt
  7. Heo
  8. Rau củ
  9. Tráng miệng
  10. Đồ uống
  11. Combo
- ✅ **64 món ăn** với đầy đủ thông tin (tên, giá, ảnh, danh mục)
- ✅ **64 ảnh** món ăn trong thư mục `images/`

### Checklist trước khi chạy:
- [ ] Đã cài XAMPP phiên bản 8.0+
- [ ] Đã copy toàn bộ thư mục vào `C:\xampp\htdocs\webfoodshop-oder\`
- [ ] Đã start Apache + MySQL trong XAMPP
- [ ] Đã tạo database tên `website`
- [ ] Đã import file `database.sql`
- [ ] Thư mục `images/` có đủ 64 file ảnh
- [ ] Truy cập thành công `http://localhost/webfoodshop-oder/index.php`

### Lưu ý khi phát triển:
- Đảm bảo XAMPP đang chạy trước khi truy cập
- Backup database thường xuyên (Export từ phpMyAdmin)
- Không đẩy file có chứa mật khẩu thật lên Git
- Tắt XAMPP khi không sử dụng để tiết kiệm tài nguyên

### Nếu muốn đổi tên database:
Phải sửa trong **TẤT CẢ** các file PHP có dòng:
```php
new mysqli("localhost", "root", "", "website")
```
Đổi `"website"` thành tên database mới của bạn.

---

## 📄 License
Dự án học tập - Nhóm 02 - Công nghệ thông tin k68 môn học phát triển ứng dụng web

---

**Cập nhật lần cuối:** [20/12/2025]
