function validateForm() {

    // Get field values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let address = document.getElementById("address").value.trim();
    let resume = document.getElementById("resume").value;

    let errorBox = document.getElementById("errorBox");
    let successMsg = document.getElementById("successMsg");

    errorBox.innerHTML = "";
    successMsg.innerHTML = "";

    // Regular expression patterns
    let namePattern = /^[a-zA-Z\s]{3,50}$/;
    let emailPattern = /^[^\s]+@[^\s]+\.[a-z]{2,3}$/i;
    let phonePattern = /^[0-9]{10}$/;
    let dobPattern = /^\d{2}-\d{2}-\d{4}$/;
    let resumePattern = /\.(pdf|doc|docx)$/i;

    // 1. Mandatory field check
    if (name === "" || email === "" || phone === "" || dob === "" || address === "" || resume === "") {
        errorBox.innerHTML = "All fields are mandatory. Please fill in every field.";
        return false;
    }

    // 2. Name validation
    if (!namePattern.test(name)) {
        errorBox.innerHTML = "Name should contain only letters and spaces (3-50 characters).";
        return false;
    }

    // 3. Email format validation
    if (!emailPattern.test(email)) {
        errorBox.innerHTML = "Invalid email format.";
        return false;
    }

    // 4. Phone number validation
    if (!phonePattern.test(phone)) {
        errorBox.innerHTML = "Phone number must be exactly 10 digits.";
        return false;
    }

    // 5. Date of birth format validation
    if (!dobPattern.test(dob)) {
        errorBox.innerHTML = "Date of Birth must be in DD-MM-YYYY format.";
        return false;
    }

    // 6. Resume file type validation
    if (!resumePattern.test(resume)) {
        errorBox.innerHTML = "Only PDF, DOC, or DOCX files are allowed for resume.";
        return false;
    }

    // All validations passed
    successMsg.innerHTML = "Registration successful! Welcome, " + name + ".";
    return false; // prevent actual form submission for demo purpose
}
