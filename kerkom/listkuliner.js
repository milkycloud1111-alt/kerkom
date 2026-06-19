const foodItems = document.querySelectorAll('.food-item');

const options = {
    root: null, 
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" 
  };

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear'); 
        observer.unobserve(entry.target); 
      }
    });
  }, options);
  foodItems.forEach(item => {
    observer.observe(item);
  });
