$(document).ready(function () {
    // Function to display message after submit
    function sayCode() {
        alert("Thank you for filling out the form! We will be in touch with you soon!");
    }
    function isValidEmail(email) {
        if (email.length > 254 || !email.includes("@") || !email.includes(".")) {
            return false;
        }
        return true;
    }
    $("#RyderForm").on("submit", function (event) {
        var email = $("#email").val();

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        sayCode();
    });
    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
});