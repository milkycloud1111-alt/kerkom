//ini kodingan buat animasiin scrollnya
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

//ini kodingan buat si pop up
const modal = document.getElementById("foodModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

// buat tombol kuliner diklik
function openModal(title, description) {
    modalTitle.innerText = title;       
    modalDesc.innerText = description;
    modal.classList.add("aktif");        
}

// buat nutup pop up
function closeModal() {
    modal.classList.remove("aktif");
}

// nutup pop up kalo klik area luar pop up
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}