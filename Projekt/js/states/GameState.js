//Globala variabler som var tänkta att användas, nu används bara 'speed'.
var enemies;
var music;
var speed = -200;

var GameState={
    
create: function() {
    //Centrerar och förstorar spelet efter fönstrets storlek. 
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    //Aktiverar physics till spelet så att man kan applicera det på objekt senare.
        this.game.physics.startSystem(Phaser.Physics.ARCADE);           
        this.game.physics.arcade.gravity.y=1000;
    //Aktiverar tangentbordet.   
        this.cursors=this.game.input.keyboard.createCursorKeys();
            
        this.game.world.setBounds(0,0,900,700);
    
        music = game.add.audio('main');

        music.play();
    //Sätter en 'jumping speed' som jag kommer att använda till hopp mekaniken.
        this.JUMPING_SPEED=625;
    
    //Lägger till alla bakgrunder som behövs för att få den parallax effekt jag var ute efter.
        this.bg1 = this.game.add.tileSprite(0,0,100000,726,'bg1');
        this.game.physics.arcade.enable(this.bg1);
        this.bg1.body.allowGravity = false;
        this.bg1.body.velocity.x = -15;
    
        this.bg2 = this.game.add.tileSprite(0,100,100000,726,'bgfore');
        this.game.physics.arcade.enable(this.bg2);
        this.bg2.body.allowGravity = false;
        this.bg2.body.velocity.x = -30;
    
        this.bg4 = this.game.add.tileSprite(0,100,10000,364,'bgfore3');
        this.game.physics.arcade.enable(this.bg4);
        this.bg4.body.allowGravity = false;
        this.bg4.body.velocity.x = -50;
    
        this.bg3 = this.game.add.tileSprite(0,50,100000,364,'bgfore2');
        this.game.physics.arcade.enable(this.bg3);
        this.bg3.body.allowGravity = false;
        this.bg3.body.velocity.x = -80;
    
    //skapar den visuella marken vilket det ser ut att spelaren springer på.
        this.ground = this.add.tileSprite(0,408,100000,99,'ground');
        this.game.physics.arcade.enable(this.ground);
        this.ground.body.allowGravity = false;
        this.ground.body.immovable = true;
    //Då tileSprites inte fungerade så bra med physics så skapade jag ett tomt block som spelaren springer på.
        this.ram = game.add.sprite(0,408, null); //x,y,utan bild
        this.game.physics.arcade.enable(this.ram);
        this.ram.body.setSize(100000,10); //bredd, höjd
        this.ram.body.immovable = true;
        this.ram.body.allowGravity = false;
    //Skapar spelaren och ger den värden samt animation.
        this.player = this.add.sprite(256,300, 'player', 3);
        this.player.anchor.setTo(0.5);
        this.player.animations.add('walking', [4, 3, 2, 3], 6, true);
        this.player.animations.add('jumping',[5]);
        this.player.animations.add('down',[0]);
        this.game.physics.arcade.enable(this.player);
        this.player.customParams = {};
    //lägger till tre eldar som är de enda som används.
        this.fire = this.add.sprite(950,390,'fire');
        this.fire.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.fire);
        this.fire.body.allowGravity = false;
        this.fire.animations.add('fire',[0,1],4,true);
        this.fire.animations.play('fire');
      
        this.fire2 = this.add.sprite(1500,390,'fire');
        this.fire2.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.fire2);
        this.fire2.body.allowGravity = false;
        this.fire2.animations.add('fire',[0,1],4,true);
        this.fire2.animations.play('fire');
        
        this.fire3 = this.add.sprite(1950,390,'fire');
        this.fire3.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.fire3);
        this.fire3.body.allowGravity = false;
        this.fire3.animations.add('fire',[0,1],4,true);
        this.fire3.animations.play('fire');
    //Poängen som visas uppe i vänstra hörnet.
        this.score = this.game.add.text(0,0,'0',style)
    },
update:function(){
    //Gör kollision mellan spelare - mark och en overlap mellan spelare -eld.
        this.game.physics.arcade.collide(this.player, [this.ground,this.ram]);
        this.game.physics.arcade.overlap(this.player,[this.fire, this.fire2, this.fire3],this.enemyHit,null,this);
    //Startar 'walking' animationen.   
        if(this.player.body.velocity.x>=0){
            this.player.animations.play('walking')
        };
    //När eldarna når ett x-värde på -100 så skickas dom tillbaks till ett värde mellan 900-1000,2000 och 2500 vilket gör att dom kommer i princip slumpmässigt. 
        if(this.fire.x<-100){
            this.fire.x=game.rnd.integerInRange(900, 2000)
        };
        
        if(this.fire2.x<-100){
            this.fire2.x=game.rnd.integerInRange(900, 1000)
        };
    
        if(this.fire3.x<-100){
            this.fire3.x=game.rnd.integerInRange(900, 2500)
        }
    //När man trycker på uppåtpilen och 'player' rör marken så hoppar man med halva JUMPING_SPEED.
        if(this.cursors.up.isDown && this.player.body.touching.down) {
        this.player.body.velocity.y = -this.JUMPING_SPEED;
        }else if(this.cursors.down.isDown){
            this.player.body.velocity.y=0.5*this.JUMPING_SPEED;
            this.player.animations.play('down');
        }
        if(this.cursors.up.isDown){
            this.player.animations.play('jumping');
        }
    //Variabeln speed minskar, eller ökar i negativ riktning så eldarna med tiden 
        speed=speed-0.2;
    
        this.ground.body.velocity.x=speed;
    
        this.fire.body.velocity.x = speed;
        this.fire2.body.velocity.x = speed;
        this.fire3.body.velocity.x = speed;
    //Här bestäms poäng beroende utav hur snabbt eldarna rör på sig.
        this.score.setText(Math.floor(-speed-200))
    },
    //När spelaren rör elden så startar statet 'GameOver' och spelet är slut.
   enemyHit:function(player){
       this.state.start('GameOver');
   } 
};
