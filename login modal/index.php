<?php
session_start();
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Web Đặt Đồ Ăn</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h2>🍕 Food Order</h2>

    <?php if(isset($_SESSION['user'])): ?>
        <span>Xin chào, <?= $_SESSION['user'] ?></span>
        <a href="logout.php">Đăng xuất</a>
    <?php else: ?>
        <button onclick="openModal()">Đăng nhập</button>
    <?php endif; ?>
</header>

<!-- LOGIN MODAL -->
<div id="loginModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h3>Đăng nhập</h3>
        <form action="login.php" method="post">
            <input type="text" name="username" placeholder="Tên đăng nhập" required>
            <input type="password" name="password" placeholder="Mật khẩu" required>
            <button type="submit">Đăng nhập</button>
        </form>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
