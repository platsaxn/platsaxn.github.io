//Tre globala variabler som jag använder till texten i spelet.
var style={font:'50px Comic Sans MS',fill:'#fff'};
var styles={font:'25px Comic Sans MS',fill:'#fff'}
var style2={font:'50px Comic Sans MS',fill:'#FF0000'};
var style3={font:'12px Comic Sans MS',fill:'#808080'};
//HomeState är min hemskärm och det första som visar något för användaren.
var HomeState={
    
    create:function(){
        //Lägger spelet centrerat på skärmen.
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        //lägger till bakgrunden 'bg1' och gör den klickbar så att man kan komma vidare till spelet.
        //När man klickar på skärmen så startar 'GameState'.
        var background=this.game.add.sprite(0,0,'bg1');
        background.inputEnabled=true;
        background.events.onInputDown.add(function(){
            this.state.start('GameState');
        },this);
        
        //Lägger till texten 'TOUCH TO START' och även instruktioner för spelet.
        this.game.add.text(50,this.game.world.centerY-200,'TOUCH TO START',style);
        
        this.game.add.text(280,220,'AVOID: ',style);
        this.game.add.sprite(480,235,'fire');
        this.game.add.text(250,280,'USE UP AND DOWN-ARROW',styles);
        this.game.add.text(280,320,'TO NAVIGATE',styles);
        //Lägger till en sprite 'ground' för visuell effekt.
        this.add.sprite(0,408,'ground');
        
    }   
};