document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const progressCircles = document.querySelectorAll(".progress-circle");
  const speed = 200; 

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

  progressCircles.forEach(circle => {
    const percentage = circle.getAttribute("data-percentage");
    let currentPercentage = 0;

    const animateCircle = () => {
      if (currentPercentage < percentage) {
        currentPercentage++;
        circle.style.background = `conic-gradient(#4CAF50 ${currentPercentage}%, #e0e0e0 ${currentPercentage}%)`;
        setTimeout(animateCircle, 10);
      }
    };

    animateCircle();
  });
});
