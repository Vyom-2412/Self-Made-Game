class Enemy
{
   constructor(x,y)
   {
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 50;
      this.EnEmY = createSprite(this.x,this.y,this.width,this.height);
      this.eNeMy = loadImage('Images/Enemy.png');
   }
   display()
   {
      this.EnEmY.addImage(this.eNeMy);

      this.EnEmY.x = this.EnEmY - 1;

      drawSprites();
   }
}