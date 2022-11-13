img="";

function preload()
{
    img = loadImage("20221110_184107.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    text("Sharpener", 45, 75);
    fill("FF0001")
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450, 350);
}