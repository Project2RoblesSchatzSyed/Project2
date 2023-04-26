$(document).ready(function() {
    // Function to display message after submit
    function sayCode() {
        alert("Thank you for filling out the form! We will be in touch with you soon!");
    }

    $("#submit").on("click", sayCode);

    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
});



// Function to display message after submit
//function sayCode() {
//   alert("Thank you for filling out the form! We will be in touch with you soon!");
//}
//document.getElementById("submit").onclick = sayCode;
//
//    $( function() {
//    $( "#accordion" ).accordion({
//        collapsible: true,
//        active: false,
//        heightStyle: "content"
//    });
//} );
