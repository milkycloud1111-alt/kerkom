
const semuaFoodItem = document.querySelectorAll('.food-item');
const opsiScroll = {
    root: null, 
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px" 
};

const pengintaiScroll = new IntersectionObserver(function(entries, pengintaiScroll) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('muncul'); 
            pengintaiScroll.unobserve(entry.target); 
        }
    });
}, opsiScroll);

semuaFoodItem.forEach(item => {
    pengintaiScroll.observe(item);
});