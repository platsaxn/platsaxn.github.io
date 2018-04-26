var style={font:'50px Comic Sans MS',fill:'#fff'};
var style2={font:'50px Comic Sans MS',fill:'#FF0000'};
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
        
        
        this.game.add.text(50,this.game.world.centerY-160,'TOUCH TO START',style);
        
        this.game.add.text(400,300,'AVOID: ',style);
        this.game.add.sprite(600,310,'fire');
        this.game.add.text(410,360,'USE UP-ARROW ',style);
        this.game.add.text(420,420,'TO JUMP',style);
        
        this.add.sprite(0,628,'ground');
    
        
    }   
};