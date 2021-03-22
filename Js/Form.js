class Home
{
   constructor()
   {
      this.title = createElement('h1');
      this.settings = createButton("Settings");
      this.instructions = createButton("Instructions");
      this.start = createButton('Start');
      this.level1 = createButton('Level 1');
      this.level2 = createButton('Level 2');
      this.level3 = createButton('Level 3');
      this.level4 = createButton('Level 4');
      this.tutorial = createButton('Tutorial');
   }
   hide()
   {
      this.title.hide();
      this.settings.hide();
      this.instructions.hide();
      this.start.hide();
   }
   display()
   {
      this.title.html("Rogue Experiment");
      this.start.position(700,500);
      this.title.position(600,100);
      this.settings.position(600,600);
      this.instructions.position(800,600);
      this.level1.position(500,400);
      this.level2.position(600,400);
      this.level3.position(700,400);
      this.level4.position(800,400);
      this.tutorial.position(900,400);
      this.settings.mousePressed(()=>
      {
          this.settings.hide();
          this.instructions.hide();
          this.title.hide();
          this.start.hide();
          this.tutorial.hide();
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
      })
      //this.start.mousePressed(()=>
      //{
      //    this.settings.hide();
      //    this.instructions.hide();
      //    this.title.hide();
      //    this.start.hide();
      //})
      this.instructions.mousePressed(()=>
      {
          this.settings.hide();
          this.instructions.hide();
          this.title.hide();
          this.start.hide();
          this.tutorial.hide();
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
      })
      this.level1.mousePressed(()=>
      {
          this.title.hide();
          this.settings.hide();
          this.instructions.hide();
          this.start.hide();
          this.tutorial.hide();
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          lev1 = new Game();
          lev1.level1();
      })
      this.level2.mousePressed(()=>
      {
          this.title.hide();
          this.settings.hide();
          this.instructions.hide();
          this.start.hide();
          this.tutorial.hide();
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          lev2 = new Game();
          lev2.level2();
      })
      this.level3.mousePressed(()=>
      {
          this.title.hide();
          this.settings.hide();
          this.instructions.hide();
          this.start.hide();
          this.tutorial.hide();
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          lev3 = new Game();
          lev3.level3();
      })
      this.level4.mousePressed(()=>
      {
          this.title.hide();
          this.settings.hide();
          this.instructions.hide();
          this.start.hide();
          this.tutorial.hide();
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          lev4 = new Game();
          lev4.level4();
      })
   }
}