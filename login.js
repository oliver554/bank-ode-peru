function validateForm(){
var username = document.getElementById("usr").value;
var password = document.getElementById("pwd").value;
    if (username == "ryan2519" && password == "Wayne098123!?!"){
        alert("Login is successful!");
        document.login_form.action = "Dashboard.html";
        // alert(document.login_form.action);
        // window.location.replace("Bank Of Peru_Dashboard.html");
        return true;
    }
    else{
        alert("wrong password");
        // window.location.replace("index.html");
    }
}

