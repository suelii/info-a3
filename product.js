// Thumbnail images
window.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".div-10 img");
  const mainDisplay = document.querySelector(".main-display");
  const rightArrow = document.querySelector(".vector-2");
  const leftArrow = document.querySelector(".vector-3");

  // Check if all elements are found
  if (!thumbnails.length || !mainDisplay || !rightArrow || !leftArrow) {
    console.warn("Some elements are missing — check your class names and HTML structure.");
    return;
  }

  const imageSources = Array.from(thumbnails).map(img => img.src);
  let currentIndex = 0;

  function updateMainImage() {
    mainDisplay.src = imageSources[currentIndex];
  }

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    updateMainImage();
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    updateMainImage();
  });

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      currentIndex = index;
      updateMainImage();
    });
  });
});


// Quantity +-

window.addEventListener("DOMContentLoaded", () => {
  const quantityContainers = document.querySelectorAll(".div-28");

  quantityContainers.forEach(container => {
    const minusBtn = container.querySelector(".button-8");
    const plusBtn = container.querySelector(".button-9");
    const display = container.querySelector(".text-wrapper-19");

    let quantity = parseInt(display.textContent);

    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        display.textContent = quantity;
      } else {
        alert("Quantity cannot be less than 1.");
      }
    });

    plusBtn.addEventListener("click", () => {
      quantity++;
      display.textContent = quantity;
    });
  });
});