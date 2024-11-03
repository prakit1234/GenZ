const canvas = document.getElementById('colorCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.color');
let selectedColor = '#FF5733'; // Default color

canvas.width = 600; // Set canvas width
canvas.height = 400; // Set canvas height

// Function to fill the canvas with the selected color
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.fillStyle = selectedColor;
    ctx.fillRect(x - 25, y - 25, 50, 50); // Fill a square of 50x50 pixels
});

// Function to select a color from the palette
colors.forEach(color => {
    color.addEventListener('click', () => {
        selectedColor = color.style.backgroundColor;
    });
});