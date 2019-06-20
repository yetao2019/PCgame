function checkEmail() {
    var email = document.getElementById("email").value;
    var regemail = /^\w+@\w+(\.\w+){1,3}$/;
    var span = document.getElementById("validation-email");
    if (email.search(regemail) === -1) {
        span.innerHTML = "邮箱格式不正确、不能为空";
        span.style.color = "red";
    } else {
        span.innerHTML = "邮箱可用";
        span.style.color = "green";
    }
}
function checkPassword() {
    var password = document.getElementById("password").value;
    var passpan = document.getElementById("validation-password");
    if (password.length < 6 || password.length > 18) {
        passpan.innerHTML = "密码长度必须是6-18位";
        passpan.style.color = "red";
    } else {
        passpan.innerHTML = "密码可用";
        passpan.style.color = "green";
    }
}

function checkAgainPassword() {
    var password = document.getElementById("password").value;
    var againpassword = document.getElementById("again-password").value;
    var app = document.getElementById("vap");
    if (password !== againpassword) {
        app.innerHTML = "两次密码不一致";
        app.style.color = "red";
    } else {
        app.innerHTML = "输入正确";
        app.style.color = "green";
    }
}
var password = document.getElementById("password").value;
var againpassword = document.getElementById("again-password").value;
var email = document.getElementById("email").value;
document.cookie = "email = email";