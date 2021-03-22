class Game
{
   constructor()
   {}
   tutorial()
   {
     this.movement = createButton("Use WASD to move");
     this.shoot = createButton("Press left mouse button to shoot");
     this.aim = createButton("Press right arrow button to aim");
   }
   level1()
   {
     background("black");
     enemy1 = new Enemy(600,600);
     enemy1.display();
     characterForLevel1 = new Character(100,100);
     characterForLevel1.display();
   }
   level2()
   {
     background();
     enemy2 = new Enemy(600,500);
     enemy2.display();
     characterForLevel2 = new Character(100,100);
     characterForLevel2.display();
   }
   level3()
   {
     enemy3 = new Enemy(500,600);
     enemy3.display();
     characterForLevel3 = new Character(100,100);
     characterForLevel3.display();
   }
   level4()
   {
     enemy4 = new Enemy(550,600);
     enemy4.display();
     characterForLevel4 = new Character(100,100);
     characterForLevel4.display();
   }
   display()
   {
     this.movement.display();
     this.movement.position(400,350,60,60);
     this.shoot.display();
     this.shoot.position(500,350,60,60);
     this.aim.display();
     this.aim.position(550,350,60,60);
   }
}