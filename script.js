function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("message").value;

    if (name === "" || email === "" || msg === "") {
        alert("All fields are required!");
        return false;
    } else {
        alert("Thank you, " + name + "! Your message has been sent.");
        return true;
    }
}