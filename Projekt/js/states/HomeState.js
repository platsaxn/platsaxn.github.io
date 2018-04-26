var style={font:'50px Comic Sans MS',fill:'#fff'};
var styles={font:'25px Comic Sans MS',fill:'#fff'}
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
        
        
        this.game.add.text(50,this.game.world.centerY-200,'TOUCH TO START',style);
        
        this.game.add.text(280,220,'AVOID: ',style);
        this.game.add.sprite(480,235,'fire');
        this.game.add.text(250,280,'USE UP AND DOWN-ARROW',styles);
        this.game.add.text(280,320,'TO NAVIGATE',styles);
        
        this.add.sprite(0,408,'ground');
    
        
    }   
};