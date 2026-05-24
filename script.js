// Select elements
const galleryItems =
document.querySelectorAll(".gallery-item");

const modal =
document.getElementById("modal");

const modalImg =
document.getElementById("modal-img");

const closeBtn =
document.getElementById("close");

// Open image when clicked
galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImg.src = item.src;
    });

});

// Close button
closeBtn.addEventListener("click", () => {

    modal.style.display = "none";
});

// Close when clicking outside image
modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";
    }

});