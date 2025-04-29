

/*All your javascript code goes here*/
// Example: Function to show an alert
//function showAlert() {
    //alert("Hello, this is an alert!");
//}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // Adjust speed for animation

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});


const menuToggle = document.querySelector('.menu-toggle'); // Hamburger icon
const navLinks = document.querySelector('.nav-links'); // Navigation list

menuToggle.addEventListener('click', () => {
    // Toggle the "active" class to show or hide the menu
    navLinks.classList.toggle('active');
});

const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;

// Check if dark mode is already active when the page loads
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode'); // Add dark mode class if saved preference exists
}

// Toggle between light and dark mode when clicking the moon icon
darkModeIcon.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggle dark mode
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // Save dark mode preference
    } else {
        localStorage.setItem('theme', 'light'); // Save light mode preference
    }

});
