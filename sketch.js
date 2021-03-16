var homePage,tutorial_page;
var player,eNEMY;
var cover, cover2, cover3, cover4;
var game;

function preload()
{
   player = loadImage('Images/images.png');
}
function setup()
{
   createCanvas(700,700);
   homePage = new Home();
   homePage.display();
   
}

function draw()
{
   background("white");
}