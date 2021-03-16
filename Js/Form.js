class Home
{
   constructor()
   {
      this.title = createElement('h1');
      this.settings = createButton("Settings");
      this.instructions = createButton("Instructions");
      this.start = createButton('Start');
      this.play = createSelect();
      this.play.position(1000,1000);
      this.play.option('Tutorial');
      this.play.option('Level 1');
      this.play.option('Level 2');
      this.play.option('Level 3');
      this.play.option('Level 4');
      this.play.changed(this.event);
   }
   hide()
   {
      this.title.hide();
      this.play.hide();
      this.settings.hide();
      this.instructions.hide();
      this.start.hide();
   }
   event()
   {
      this.play.value();
   }
   display()
   {
      this.title.html("Rogue Experiment");
      this.start.position(650,450,100,100);
      this.title.position(575,300,100,100);
      this.play.position(650,400,100,100);
      this.settings.position(600,525,80,80);
      this.instructions.position(700,525,80,80);
      this.settings.mousePressed(()=>
      {
          this.settings.hide();
          this.instructions.hide();
          this.title.hide();
          this.play.hide();
          this.start.hide();
      })
      this.start.mousePressed(()=>
      {
          this.settings.hide();
          this.instructions.hide();
          this.title.hide();
          this.play.hide();
          this.start.hide();
          if(this.play.value() === 'Level 1')
          {
             game = new Game();
             game.level1();
          }
          else if(this.play.value() === 'Level 2')
          {
             game = new Game();
             game.level2();
          }
          else if(this.play.value() === 'Level 3')
          {
             game = new Game();
             game.level3();
          }
          else if(this.play.value() === 'Level 4')
          {
             game = new Game();
             gamwe.level4();
          }
      })
      this.instructions.mousePressed(()=>
      {
          this.settings.hide();
          this.instructions.hide();
          this.title.hide();
          this.play.hide();
          this.start.hide();
      })
   }
}