window.addEventListener("load", function () {
    const buttons = document.querySelectorAll(".clickable-btn");
    const modal = document.getElementById("my-modal");
    const iframe = document.getElementById("modal-iframe");
    const closeModal = document.querySelector(".close");

    buttons.forEach((btn) => {
        const img = btn.querySelector(".btn-image");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Attach a hidden canvas to each button
        btn.appendChild(canvas);
        canvas.style.display = "none";

        function setupCanvas() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            console.log("Canvas redrawn for button:", btn);
        }

        function isTransparent(x, y) {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const index = (y * canvas.width + x) * 4;
            return imageData.data[index + 3] === 0; // Alpha channel check
        }

        function handleClick(event) {
            const rect = img.getBoundingClientRect();
            const x = Math.floor(event.clientX - rect.left);
            const y = Math.floor(event.clientY - rect.top);

            if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
                if (isTransparent(x, y)) {
                    console.log("Clicked on transparent part, passing click through...");
                    event.preventDefault();
                    event.stopImmediatePropagation();

                    // Find the button below
                    btn.style.visibility = "hidden"; // Temporarily hide the button
                    const elementBehind = document.elementFromPoint(event.clientX, event.clientY);
                    btn.style.visibility = "visible"; // Restore visibility

                    if (elementBehind && elementBehind !== btn) {
                        console.log("Clicking element behind:", elementBehind);
                        elementBehind.click();
                    }
                } else {
                    console.log("Valid click! Opening modal...");
                    const link = btn.getAttribute("data-link");
                    if (link) {
                        iframe.src = link; // Set iframe source
                        modal.style.display = "block"; // Show modal
                    }
                }
            }
        }

        img.onload = function () {
            setupCanvas();
            btn.addEventListener("click", handleClick);
        };

        if (img.complete) {
            img.onload();
        }
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
        iframe.src = ""; // Reset iframe when closing modal
    });
});
