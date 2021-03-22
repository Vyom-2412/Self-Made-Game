class Character
{
   constructor(x,y)
   {
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 50;
      this.character = createSprite(this.x,this.y,this.width,this.height);
      this.player = loadImage('Images/Player.png');
   }
   display()
   {
      this.character.addImage(this.player);

      if(keyDown("W"))
      {
         this.character.y = this.character.y-10;
      }
      else if(keyDown("S"))
      {
         this.character.y = this.character.y + 10;
      }
      else if(keyDown("A"))
      {
         this.character.x = this.character.x - 10;
      }
      else if(keyDown("D"))
      {
         this.character.x = this.character.x + 10;
      }

      drawSprites();
   }
}