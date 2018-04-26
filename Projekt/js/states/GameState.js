var enemies;
var health = 100;
var speed = -200;

var GameState={
    
create: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    
        this.game.physics.startSystem(Phaser.Physics.ARCADE);           
        this.game.physics.arcade.gravity.y=1000;
        
        this.cursors=this.game.input.keyboard.createCursorKeys();
            
        this.game.world.setBounds(0,0,900,700);
    
        this.JUMPING_SPEED=625;
    
    
        this.game.add.sprite(0,0,'bg1');
    
        this.ground = this.add.tileSprite(0,628,10000,72,'ground');
        this.game.physics.arcade.enable(this.ground);
        this.ground.body.allowGravity = false;
        this.ground.body.immovable = true;
    
        this.ram = game.add.sprite(0,628, null); //x,y,utan bild
        this.game.physics.arcade.enable(this.ram);
        this.ram.body.setSize(10000,10); //bredd, höjd
        this.ram.body.immovable = true;
        this.ram.body.allowGravity = false;
    
        this.player = this.add.sprite(256,300, 'player', 3);
        this.player.anchor.setTo(0.5);
        this.player.animations.add('walking', [4, 3, 2, 3], 6, true);
        this.game.physics.arcade.enable(this.player);
        this.player.customParams = {};

    
        /*enemies = game.add.group();
        this.game.physics.arcade.enable(enemies);
        enemies.body.velocity.x=-200;
    
        enemies.create(900, 590, 'fire');*/
    
        this.fire = this.add.sprite(950,610,'fire');
        this.fire.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.fire);
        this.fire.body.allowGravity = false;
        this.fire.animations.add('fire',[0,1],4,true);
        this.fire.animations.play('fire');
      
    
        this.fire2 = this.add.sprite(1500,610,'fire');
        this.fire2.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.fire2);
        this.fire2.body.allowGravity = false;
        this.fire2.animations.add('fire',[0,1],4,true);
        this.fire2.animations.play('fire');
        
    
        this.fire3 = this.add.sprite(1950,610,'fire');
        this.fire3.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.fire3);
        this.fire3.body.allowGravity = false;
        this.fire3.animations.add('fire',[0,1],4,true);
        this.fire3.animations.play('fire');
    
        this.score = this.game.add.text(0,0,'0',style)
    },
update:function(){
        this.game.physics.arcade.collide(this.player, [this.ground,this.ram]);
        this.game.physics.arcade.overlap(this.player,[this.fire, this.fire2, this.fire3],this.enemyHit,null,this);
        
        if(this.player.body.velocity.x>=0){
            this.player.animations.play('walking')
        };
        
        if(this.fire.x<-100){
            this.fire.x=game.rnd.integerInRange(900, 2000)
        };
        
        if(this.fire2.x<-100){
            this.fire2.x=game.rnd.integerInRange(900, 1000)
        };
    
        if(this.fire3.x<-100){
            this.fire3.x=game.rnd.integerInRange(900, 2500)
        }
    
        if(this.cursors.up.isDown && this.player.body.touching.down) {
        this.player.body.velocity.y = -this.JUMPING_SPEED;
        }else if(this.cursors.down.isDown){
            this.player.body.velocity.y=0.5*this.JUMPING_SPEED;
        }
    
        speed=speed-0.2;
    
        this.ground.body.velocity.x=speed;
    
        this.fire.body.velocity.x = speed;
        this.fire2.body.velocity.x = speed;
        this.fire3.body.velocity.x = speed;
        console.log(Math.floor(-speed))
    
        this.score.setText(Math.floor(-speed-200))
    },
   enemyHit:function(player){
       this.state.start('GameOver');
   } 
};
