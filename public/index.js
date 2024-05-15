document.getElementById("createRoom").addEventListener("click", function () {
	window.location.href = "/new-room"; // Redirect to the server route that creates the room
});

//Tutorial button thing
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("imageViewer").style.display = "none"; // Hide the modal when the page loads
});

document.getElementById("instructions").addEventListener("click", function() {
    var imageViewer = document.getElementById("imageViewer");
    imageViewer.style.display = "block";
    setTimeout(function() {
        imageViewer.style.opacity = "1"; // Fade in the modal
    }, 50);
});

document.querySelector(".close").addEventListener("click", function() {
    var imageViewer = document.getElementById("imageViewer");
    imageViewer.style.opacity = "0"; // Fade out the modal
    setTimeout(function() {
        imageViewer.style.display = "none";
    }, 300); // Hide the modal after the transition ends
});

// Image Navigation
var images = ["./assets/instructions1.jpg", "./assets/logo.svg", "./assets/DATEKTLY.svg"]; // Add more image URLs as needed
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