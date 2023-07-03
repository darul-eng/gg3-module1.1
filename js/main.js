function validateForm(){
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;

    if (email === ""){
        alert("Email is Required");
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        alert("Email must be Valid Email");
        return false;
    }

    if (password === ""){
        alert("Password is Required");
        return false;
    }

    if (password.length < 6){
        alert("Password cannot less then 6 character");
        return false;
    }

    return true;
}