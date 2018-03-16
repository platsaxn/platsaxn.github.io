var GameStart={
    preload:function(){
        this.load.image('background','assets/images/background.jpg');
        this.load.image('button','assets/images/button.png');
        this.load.image('restart','assets/images/restart.png');
        this.load.image('avsluta','assets/images/avsluta.png');
    },
    create:function(){
        this.add.sprite(0,0,'background');
        
        var namn=this.add.text(game.world.centerX,200,'WordFLipper',{fontSize:'55px',fill:'#fff'});
        namn.anchor.setTo(0.5);
        
        var button=game.add.button(game.world.centerX,game.world.centerY,'button');
        button.anchor.setTo(0.5);
        
        button.events.onInputUp.add(function(){
            this.state.start('GameState',true,false);
        },this);
    },
}