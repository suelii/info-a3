document.addEventListener("DOMContentLoaded", function () {
  // Select all quantity wrappers (in case you have more than one)
  const quantitySections = document.querySelectorAll(".div-11");

  quantitySections.forEach(section => {
    const minusBtn = section.querySelector(".minus");
    const plusBtn = section.querySelector(".plus");
    const quantityDisplay = section.querySelector(".text-wrapper-7");

    // Convert the current quantity text to number
    let quantity = parseInt(quantityDisplay.textContent);

    plusBtn.addEventListener("click", () => {
      quantity++;
      quantityDisplay.textContent = quantity;
    });

    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      } else {
        alert("Quantity cannot be less than 1.");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const shippingCost = 6.9;

  function updateTotals() {
    let subtotal = 0;

    document.querySelectorAll(".div-6").forEach(section => {
      const quantityDisplay = section.querySelector("div[class*='text-wrapper']");
      const quantity = parseInt(quantityDisplay.textContent);

      // Go up to find the corresponding price (assumes structure is stable)
      const priceContainer = section.closest(".div-2, .div-10").querySelector("div[class*='text-wrapper-3'], div[class*='text-wrapper-6']");
      const price = parseFloat(priceContainer.textContent.replace("$", ""));

      subtotal += price * quantity;
    });

    // Update the DOM
    document.querySelector(".text-wrapper-10").textContent = `$${subtotal.toFixed(2)}`;
    const total = subtotal + shippingCost;
    document.querySelector(".text-wrapper-14").textContent = `$${total.toFixed(2)}`;
  }

  // Attach event listeners to quantity buttons
  document.querySelectorAll(".div-6").forEach(section => {
    const minusBtn = section.querySelector(".minus");
    const plusBtn = section.querySelector(".plus");
    const quantityDisplay = section.querySelector("div[class*='text-wrapper']");

    let quantity = parseInt(quantityDisplay.textContent);

    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
        updateTotals();
      } else {
        alert("Quantity cannot be less than 1.");
      }
    });

    plusBtn.addEventListener("click", () => {
      quantity++;
      quantityDisplay.textContent = quantity;
      updateTotals();
    });
  });

  // Call it once on page load to set correct totals
  updateTotals();
});
