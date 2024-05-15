document.getElementById("createRoom").addEventListener("click", function () {
	window.location.href = "/new-room"; // Redirect to the server route that creates the room
});

//Tutorial button thing
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("imageViewer").style.display = "none"; // Hide the modal when the page loads
});

document.getElementById("instructions").addEventListener("click", function() {
    document.getElementById("imageViewer").style.display = "block"; // Show the modal
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("imageViewer").style.display = "none"; // Hide the modal when close button is clicked
});

// Image Navigation
var images = ["./assets/DATEKTLY.svg", "./assets/logo.svg", "./assets/DATEKTLY.svg"]; // Add more image URLs as needed
var currentImageIndex = 0;
var modalImage = document.getElementById("modalImage");

document.getElementById("nextBtn").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex];
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
});