class Player
{
   constructor(x,y)
   {
      this.width = width;
      this.height = height;
   }
   display()
   {
      if(keyDowm("W"))
      {
         player.y = player.y-10;
      }
      else if(keyDown("S"))
      {
         player.y = player.y + 10;
      }
      else if(keyDown("A"))
      {
         player.x = player.x - 10;
      }
      else if(keyDown("D"))
      {
         player.x = player.x + 10;
      }
      else if(keyDown("space"))
      {
         player.velocityY = -10;
      }
   }
}