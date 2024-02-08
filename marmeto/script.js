document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".img img");
    images.forEach(function(image, index) {
        image.addEventListener("click", function() {
            console.log("Image clicked:", index); 
            images.forEach(function(img) {
                img.classList.remove("selected");
                img.style.borderColor = ""; 
            });

            
            image.classList.add("selected");
            image.style.borderColor = "blue";

            
            for (let i = index + 1; i < images.length; i++) {
                images[i].classList.add("selected");
                images[i].style.borderColor = "blue";
            }
        });
    });

    // Event listener for color options clicks
    const colorOptions = document.querySelectorAll(".color-option");
    colorOptions.forEach(function(option) {
        option.addEventListener("click", function() {
            console.log("Color option clicked:", option.style.backgroundColor); 
            colorOptions.forEach(function(option) {
                option.classList.remove("selected");
                option.style.borderColor = ""; 
            });

            
            option.classList.add("selected");
            const selectedColor = window.getComputedStyle(option).getPropertyValue("background-color");
            option.style.borderColor = selectedColor;
        });
    });

    // Event listener for quantity increment and decrement buttons
    const decrementButton = document.querySelector(".decrement");
    const incrementButton = document.querySelector(".increment");
    const quantityInput = document.querySelector(".quantity-input");

    decrementButton.addEventListener("click", function() {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    incrementButton.addEventListener("click", function() {
        if (parseInt(quantityInput.value) < parseInt(quantityInput.max)) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
    });
});
