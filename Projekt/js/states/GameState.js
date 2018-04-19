var GameState={
    
create: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    
        this.game.physics.startSystem(Phaser.Physics.ARCADE);           
        this.game.physics.arcade.gravity.y=1000;
        
        this.cursors=this.game.input.keyboard.createCursorKeys();
            
        this.game.world.setBounds(0,0,900,700);
            
        this.RUNNING_SPEED=180;
        this.JUMPING_SPEED=550;
    
        this.game.add.sprite(0,0,'bg1');
    
        this.ground = this.add.tileSprite(0,628,1000,628,'ground');
        this.game.physics.arcade.enable(this.ground);
        this.ground.body.allowGravity = false;
        this.ground.body.immovable = true;
    
        this.player = this.add.sprite(0,0, 'player', 3);
        this.player.anchor.setTo(0.5);
        this.player.animations.add('walking', [0, 1, 2, 1], 6, true);
        this.game.physics.arcade.enable(this.player);
        this.player.customParams = {};

        this.game.camera.follow(this.player);
    },
    update:function(){
        this.game.physics.arcade.collide(this.player, this.ground);

        this.player.body.velocity.x = 0;
    }
};