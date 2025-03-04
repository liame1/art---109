
// Get the modal
var modal = document.getElementById("my-modal");

// Get the button that opens the modal
var btn = document.getElementById("my-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//REPLACED IN IF STATEMENT
// When the user clicks the button, open the modal 
// btn.onclick = function() {
    // modal.style.display = "block";
//   }
//REPLACED IN IF STATEMENT

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// REMOVE TRANSPARENCY FROM BUTTON
window.addEventListener("load", function () {
    const btn = document.getElementById("my-btn");
    const img = document.getElementById("btn-image");
    const canvas = document.getElementById("hitboxCanvas");
    const ctx = canvas.getContext("2d");

    function setupCanvas() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        console.log("Canvas redrawn for transparency detection.");
    }

    function checkTransparency(event) {
        const rect = img.getBoundingClientRect();
        const x = Math.floor(event.clientX - rect.left);
        const y = Math.floor(event.clientY - rect.top);

        if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            const index = (y * canvas.width + x) * 4;
            const alpha = data[index + 3]; // Get alpha value

            if (alpha > 0) {
                console.log("Valid click! Opening modal...");
                modal.style.display = "block"; // Open modal when clicked correctly
            } else {
                console.log("Clicked on a transparent area, ignoring...");
                event.preventDefault();
                event.stopImmediatePropagation();
                return false; // Block the click event fully
            }
        }
    }

    img.onload = function () {
        setupCanvas(); // Draw canvas initially
        btn.addEventListener("click", checkTransparency);
    };

    // Ensure canvas is redrawn when modal opens (fixes issue)
    btn.addEventListener("click", function () {
        setupCanvas();
    });

    if (img.complete) {
        img.onload(); // If already loaded, manually trigger setup
    }
});
