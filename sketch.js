function setup() {
    createCanvas(500, 500);
    background("black");
  }
  
  function draw() {
   
   stroke("blue");
    fill("red");
  
    // console.log (mouseIsPressed);
  
    if (mouseIsPressed) {
   
    rect(mouseX, mouseY, 20, 35);
    }
  }