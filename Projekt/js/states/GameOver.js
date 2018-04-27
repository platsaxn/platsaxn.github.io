var GameOver = {
    create:function (){
        music.stop();
        
        music = game.add.audio('dead');
        music.play();
        //Lägger till en ny mörkare bakgrund samt texten 'GAME OVER'
        this.game.add.sprite(0,0,'bg2')
        this.text = this.game.add.text(this.game.world.centerX,150,'GAME OVER',style2);
        //Slutgiltiga poängen visas.
        this.text2 = this.game.add.text(this.game.world.centerX,230,'YOUR SCORE: ' + (Math.floor(-speed-200)),style2);
        this.game.add.text(0,388,'Images done by ansimuz.',style3);
        this.game.add.text(0,400,'Music by Eric Matyas www.soundimage.org',style3);
        
        this.text.anchor.setTo(0.5);
        this.text2.anchor.setTo(0.5);
        //En knapp med texten 'TRY AGAIN?' visas som startar 'HomeState'.
        var button = game.add.button(300, 300,'button',this.restart,this,0,0,0);
    },
    restart:function(){
        //Återställer speed till sitt ursprungliga värde så att spelet återställs.
        speed=-200;
        
        music.stop();
        
        this.state.start('HomeState');
    }
};