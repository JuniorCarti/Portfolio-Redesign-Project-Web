/*All your javascript code goes here*/
// Example: Function to show an alert
//function showAlert() {
    //alert("Hello, this is an alert!");
//}

const menuToggle = document.querySelector('.menu-toggle'); // Hamburger icon
const navLinks = document.querySelector('.nav-links'); // Navigation list

menuToggle.addEventListener('click', () => {
    // Toggle the "active" class to show or hide the menu
    navLinks.classList.toggle('active');
});
