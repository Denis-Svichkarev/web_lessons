function auth(form) {
    
    var reason = "";
    var correctUserName = true;
    
    if (form.username.value == "" || /[^a-zA-z]/.test(form.username.value)) {
        reason += "Неверный логин (Логин пользователя должен содержать только латинские символы)";
        correctUserName = false;
    }
    
    if (form.password.value == "" || form.password.value.length < 3 || form.password.value.length > 10) {
         if (!correctUserName)
            reason += "\n\n";
        reason += "Неверный пароль (Длина пароля не должна быть меньше 3 символов и длиннее 10.)";
    }

    console.log(form.username.value);
    console.log(form.password.value);
    
    if (reason == "")
        return true;  
    else {
        alert(reason);  
        return false;
    }
}