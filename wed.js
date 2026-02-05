// Modal logic
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

const storyPics = document.querySelectorAll(".story-pic");

storyPics.forEach(pic => {
    pic.addEventListener("click", () => {
        modal.style.display = "block";
        modalTitle.textContent = pic.dataset.title;
        modalText.textContent = pic.dataset.text;
        modalImg.src = pic.dataset.img;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
