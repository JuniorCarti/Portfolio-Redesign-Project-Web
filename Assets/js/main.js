


/*All your javascript code goes here*/
// Example: Function to show an alert
//function showAlert() {
    //alert("Hello, this is an alert!");
//}



document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed"); // Debugging log

  // Filtering system
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');
  const caseStudyDetails = document.getElementById('case-study-details');
  const caseStudyTitle = document.getElementById('case-study-title');
  const caseStudyDescription = document.getElementById('case-study-description');
  const caseStudyTestimonial = document.getElementById('case-study-testimonial');
  const caseStudySkills = document.getElementById('case-study-skills');
  const caseStudyResults = document.getElementById('case-study-results');

  const lightbox = document.getElementById('lightbox');
  const closeLightbox = document.getElementById('close-lightbox');
  const lightboxCaption = document.getElementById('lightbox-caption');

  // Verify required elements
  if (!caseStudyDetails || !caseStudyTitle || !caseStudyDescription || !caseStudyTestimonial || !caseStudySkills || !caseStudyResults) {
    console.error("One or more case study elements are missing in the DOM.");
    return;
  }

  if (!lightbox || !closeLightbox || !lightboxCaption) {
    console.error("One or more lightbox elements are missing in the DOM.");
    return;
  }

  // Mock case study data
const caseStudies = {
  'e-commerce-website': {
    title: 'E-commerce Website',
    description: 'Developed a fully responsive e-commerce platform using React and Node.js, integrated with Stripe for payments. The project focused on optimizing user experience and performance. A key part of the project was reducing cart abandonment rates, which directly contributed to the 30% boost in sales.',
    testimonial: '"This project helped us streamline our sales process and improve user experience." - Client Name',
    skills: 'React, Node.js, Stripe API',
    results: 'Increased conversions by 30% and reduced cart abandonment by 15%'
  },

  'brand-identity-design': {
    title: 'Brand Identity Design',
    description: 'Created a comprehensive branding kit including logo, typography, and color palette using Figma and Illustrator. The project established a strong visual identity for the client.',
    testimonial: '"This design work was instrumental in establishing our brand\'s identity." - BrightPath Studios',
    skills: 'Figma, Illustrator',
    results: 'Strengthened brand presence'
  },

  'ai-powered-chatbot-support': {
    title: 'AI-Powered Chatbot Support',
    description: 'Built an AI-driven chatbot using Python, NLP, and Dialogflow, hosted on AWS. The chatbot handles customer inquiries 24/7, reducing response times significantly.',
    testimonial: '"This chatbot improved our customer service by handling queries instantly." - NovaTech Solutions',
    skills: 'Python, NLP, Dialogflow, AWS',
    results: 'Reduced response time by 50% and improved customer satisfaction by 30%'
  },
};

  // Filtering buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');
      console.log("Filter applied: ", filterValue); // Log the filter value

      workCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Hide case study details when filtering
      caseStudyDetails.classList.remove('visible');
      setTimeout(() => {
        caseStudyDetails.classList.add('hidden');
      }, 300);
    });
  });

  // Open case study details
  const caseStudyButtons = document.querySelectorAll('.case-study-btn');
  console.log("Number of case study buttons found: ", caseStudyButtons.length); // Debugging log

  if (caseStudyButtons.length === 0) {
    console.error("No case study buttons found in the DOM.");
  } else {
    caseStudyButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Case study button clicked"); // Debugging log
        const card = button.closest('.work-card');
        const caseId = card.getAttribute('data-case-id');
        console.log("Case ID: ", caseId); // Log the case ID being clicked

        const caseStudy = caseStudies[caseId];
        console.log("Selected Case Study: ", caseStudy); // Log the case study data

        if (caseStudy) {
          caseStudyTitle.textContent = caseStudy.title;
          caseStudyDescription.textContent = caseStudy.description;
          caseStudyTestimonial.textContent = caseStudy.testimonial;
          caseStudySkills.textContent = `Skills: ${caseStudy.skills}`;
          caseStudyResults.textContent = `Results: ${caseStudy.results}`;

          caseStudyDetails.classList.remove('hidden');
          setTimeout(() => caseStudyDetails.classList.add('visible'), 10);
        } else {
          console.error(`Case study with ID ${caseId} not found.`);
        }
      });
    });
  }

  // Close lightbox
  closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});



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

