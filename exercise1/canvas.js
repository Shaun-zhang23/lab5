// Get the canvas element and its 2D drawing context
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// 1. Light green background
ctx.fillStyle = "#90EE90";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 2. Yellow face (large circle) with black outline
ctx.beginPath();
ctx.arc(250, 235, 180, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

// 3. Left eye (black filled circle)
ctx.beginPath();
ctx.arc(190, 180, 16, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

// 4. Right eye (black filled circle)
ctx.beginPath();
ctx.arc(310, 180, 16, 0, 2 * Math.PI);
ctx.fill();

// 5. Nose (vertical line)
ctx.beginPath();
ctx.moveTo(250, 235);
ctx.lineTo(250, 285);
ctx.stroke();

// 6. Smile (bottom arc)
ctx.beginPath();
ctx.arc(250, 225, 115, 0.25 * Math.PI, 0.75 * Math.PI);
ctx.stroke();

// 7. Green bold text at the bottom
ctx.font = "bold 30px Arial";
ctx.fillStyle = "green";
ctx.textAlign = "center";
ctx.fillText("The Canvas brought me to life!", 250, 465);
