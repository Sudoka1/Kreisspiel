function changeColor(circle) {
    var colors = ["red", "green", "yellow", "purple"]; // Add more colors if needed
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
  }