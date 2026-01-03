const circles = [];

function setup() {
  createCanvas(400, 400);
  
  class Circle{
    constructor(size){
      this.x = random(0, width);
      this.y = random(0, height);
      this.size = random([2,3,5]);
      this.dx = random([1, 2, 3]);
    }
    
    draw(){
      circle(this.x, this.y, this.size);
    }
    
    update(){
      this.x += this.dx;
      if(this.x > width) this.x = -20;
    }
  }
  
  for(let i = 0; i < 200; i++){
    circles.push(new Circle());
  }
  
}

function draw() {
  background(0);
  circles.forEach(circle => circle.update());
  circles.forEach(circle => circle.draw());
  fill(255);
}