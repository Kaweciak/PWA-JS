document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("image-gallery");
    const folder = document.querySelector("main").getAttribute("data-folder");

    const fullscreenOverlay = document.getElementById("fullscreen-overlay");
    const fullscreenImage = document.getElementById("fullscreen-image");
    const closeButton = document.getElementById("close-button");

    let index = 1;
    const loadNextImage = () => {
        const img = new Image();
        img.src = `/images/${folder}/${index}.png`;
        img.onload = () => {
            img.classList.add("thumbnail");
            img.addEventListener("click", () => {
                fullscreenImage.src = img.src;
                fullscreenOverlay.classList.remove("hidden");
            });
            gallery.appendChild(img);
            index++;
            loadNextImage();
        };
        img.onerror = () => {
            
        };
    };

    loadNextImage();

    closeButton.addEventListener("click", () => {
        fullscreenOverlay.classList.add("hidden");
        fullscreenImage.src = "";
    });
});