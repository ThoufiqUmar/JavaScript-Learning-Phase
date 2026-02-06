
function validateForm() {
    let form = document.forms["myform"];

  let name = form["name"].value.trim();
  let email = form["email"].value.trim();
  let password = form["password"].value.trim();
  let confirm = form["confirm"].value.trim();


  
    if (name === "") {
    nameError.innerHTML = "Name is Required";
    return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
    emailError.innerHTML = "Email is Required";
    return false;
    }

    if (!email.match(emailPattern)) {
        emailError.innerHTML = "Enter valid email";
        return false;
    }

    if (password === "") {
    passwordError.innerHTML = "Password is Required";
    return false;
    }
    if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters";
        return  false;
    }

    if (confirm === "") {
    confirmError.innerHTML = "Confirm Password is Required";
    return false;
    }
    if (password !== confirm) {
        confirmError.innerHTML = "Passwords do not match";
        return false;
    }

    alert("Form validated successfully!");
    return false;
    }
