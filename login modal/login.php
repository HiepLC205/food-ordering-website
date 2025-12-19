<?php
session_start();
include "config.php";

$username = $_POST['username'];
$password = md5($_POST['password']);

$sql = "SELECT * FROM users 
        WHERE username='$username' 
        AND password='$password'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
    $_SESSION['user'] = $username;
    header("Location: index.php");
} else {
    echo "<script>
        alert('Sai tài khoản hoặc mật khẩu!');
        window.location.href='index.php';
    </script>";
}
