const username = document.querySelector(".username")
const email = document.querySelector(".email")
const phone = document.querySelector(".phone")
const address = document.querySelector(".address")
const password = document.querySelector(".password")
const cpassword = document.querySelector(".cpassword")
const btn = document.querySelector(".btn")
const errorMsg = document.querySelector(".errorMsg")
const heading = document.querySelector(".heading")

let validUsername = false;
let validEmail = false;
let validPhone = false;
let validCpassword = false;


btn.addEventListener("click", () => {

    //1.validate username
    let userValue = username.value
    let usernamePattern = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/

    let usernameRes = usernamePattern.test(userValue)
    if (userValue == "") {
        username.nextElementSibling.textContent = "Username cannot be blank"
        username.classList.add("error")
        username.classList.remove("success")
    } else if (usernameRes) {
        username.classList.add("success")
        username.classList.remove("error")
        username.nextElementSibling.textContent = ""
        validUsername = true;
        // validateInputs(userValue, validUsername)
    } else {
        username.nextElementSibling.textContent = "Username must be valid and contains minnimum 4 characters"
        username.classList.add("error")
        username.classList.remove("success")
    }

    //2.validate email
    let emailValue = email.value;
    let emailPattern = /^([_\.0-9a-zA-Z]+)@([a-z]+)\.[a-zA-Z]{2,3}$/

    let emailRes = emailPattern.test(emailValue)
    if (emailValue == "") {
        email.nextElementSibling.textContent = "Email cannot be blank"
        email.classList.add("error")
        email.classList.remove("success")
    } else if (emailRes) {
        email.classList.add("success")
        email.classList.remove("error")
        email.nextElementSibling.textContent = ""
        validEmail = true;
        // validateInputs(emailValue, validEmail)
    } else {
        email.nextElementSibling.textContent = "Email must be valid"
        email.classList.add("error")
        email.classList.remove("success")
    }

    //3.validate phone
    let phoneValue = phone.value;
    let phonePattern = /[0-9]{10}$/

    let phoneRes = phonePattern.test(phoneValue)
    if (phoneValue == "") {
        phone.nextElementSibling.textContent = "Phone number cannot be blank"
        phone.classList.add("error")
        phone.classList.remove("success")
    } else if (phoneRes) {
        phone.classList.add("success")
        phone.classList.remove("error")
        phone.nextElementSibling.textContent = ""
        validPhone = true;
        // validateInputs(phoneValue, validPhone)
    } else {
        phone.nextElementSibling.textContent = "Phone number must contains 10 digit."
        phone.classList.add("error")
        phone.classList.remove("success")
    }

    //4.validate address
    let addressValue = address.value;
    if (addressValue == "") {
        address.nextElementSibling.textContent = "Address cannot be blank"
        address.classList.add("error")
        address.classList.remove("success")
    } else {
        address.nextElementSibling.textContent = ""
        address.classList.remove("error")
        address.classList.add("success")
    }

    //5.validate password
    let passwordValue = password.value;
    let passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%!^&*+_])(?=.{8,})/;

    let passwordRes = passwordPattern.test(passwordValue)
    if (passwordValue == "") {
        password.nextElementSibling.textContent = "Password cannot be blank."
        password.classList.add("error")
        password.classList.remove("success")
    } else if (passwordRes) {
        password.classList.add("success")
        password.classList.remove("error")
        password.nextElementSibling.textContent = ""
    } else {
        password.nextElementSibling.textContent = "Password must be aplha numeric and contains 8 chracters."
        password.classList.add("error")
        password.classList.remove("success")
    }

    //6.validate confirm password
    let cpasswordValue = cpassword.value;
    if (cpasswordValue == "") {
        cpassword.nextElementSibling.textContent = "Password cannot be blank."
        cpassword.classList.add("error")
        cpassword.classList.remove("success")
    } else if (cpasswordValue == passwordValue) {
        cpassword.classList.add("success")
        cpassword.classList.remove("error")
        cpassword.nextElementSibling.textContent = ""
        validCpassword = true;
        // validateInputs(cpasswordValue, validCpassword)
    } else {
        cpassword.nextElementSibling.textContent = "Password does not match."
        cpassword.classList.add("error")
        cpassword.classList.remove("success")
    }





    if (validUsername && validEmail && validPhone && validCpassword) {
        // alert("success")
        swal(userValue, "Registration Successful!", "success");
        username.value = ""
        username.classList.remove("success")
        email.value = ""
        email.classList.remove("success")
        phone.value = ""
        phone.classList.remove("success")
        address.value = ""
        address.classList.remove("success")
        password.value = ""
        password.classList.remove("success")
        cpassword.value = ""
        cpassword.classList.remove("success")

    } 




})


