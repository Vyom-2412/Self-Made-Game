var homePage,tutorial_page;
var player,eNEMY,characterForLevel1,characterForLevel2,characterForLevel3,characterForLevel4,lev1,lev2,lev3,lev4;
var game;
var enemy1,enemy2,enemy3;

function setup()
{
   createCanvas(700,700);
   homePage = new Home();
}

function draw()
{
   background("white");

   homePage.display();
}