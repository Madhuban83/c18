var box1;
function setup() 
{

  createCanvas(400, 400);
  box1 = new Box(100,100,20,20,1,1)
}

function draw() 
{
  background(220);
  box1.show();
  box1.move_up();
}

