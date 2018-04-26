var GameOver = {
    create:function (){
        this.game.add.sprite(0,0,'bg2')
        this.text = this.game.add.text(this.game.world.centerX,150,'GAME OVER',style2);
        
        this.text2 = this.game.add.text(this.game.world.centerX,230,'YOUR SCORE: ' + (Math.floor(-speed-200)),style2);
        
        this.text.anchor.setTo(0.5);
        this.text2.anchor.setTo(0.5);
        
        var button = game.add.button(300, 300,'button',this.restart,this,0,0,0);
        
       /* again.inputEnabled=true;
        again.events.onInputDown.add(function(){
            
        },this);*/
    },
    restart:function(){
        speed=-200;
        
        this.state.start('HomeState');
    }
};