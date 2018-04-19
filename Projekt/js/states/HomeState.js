var HomeState={
    
    create:function(){
        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        var background=this.game.add.sprite(0,0,'bg1');
        background.inputEnabled=true;
        background.events.onInputDown.add(function(){
            this.state.start('GameState');
        },this);
        
        var style={font:'50px Comic Sans MS',fill:'#fff'};
        this.game.add.text(50,this.game.world.centerY-160,'TOUCH TO START',style);
        
        this.add.tileSprite(0,628,1000,628,'ground');
    
        
    }   
};