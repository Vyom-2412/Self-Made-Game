class Game
{
   constructor()
   {}
   tutorial()
   {
     this.movement = createButton("Use WASD to move");
     this.movement2 = createButton("Press space to jump");
     this.movement3 = createButton("Press/hold shift to crouch");
     this.shoot = createButton("Press left mouse button to shoot");
     this.aim = createButton("Press right arrow button to aim");
   }
   level1()
   {
     cover = creatSprite(350,200,10,60);
   }
   level2()
   {
     cover2 = createSprite(400,300,10,60);
   }
   level3()
   {
     cover3 = createSprite(200,400,10,60);
   }
   level4()
   {
     cover4 = createSprite(500,450,10,60);
   }
   display()
   {
     this.movement.display();
     this.movement.position(400,350,60,60);
     this.movement2.display();
     this.movement3.display();
     this.shoot.display();
     this.aim.display();
     this.cover.display();
   }
}