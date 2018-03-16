var GameState={
    
    create:function(){
        this.add.sprite(0,0,'background');
        
        var text=(prompt('Skriv en text för att flippa den:'));
        this.bakfram(text);
        
        var restart=game.add.button(240,427,'restart');
        restart.anchor.setTo(0.5);
        restart.events.onInputUp.add(function(){
            this.state.start(this.state.current);
        },this);
        
        var avsluta=game.add.button(480,427,'avsluta');
        avsluta.anchor.setTo(0.5);
        avsluta.events.onInputUp.add(function(){
            this.state.start('GameOver',true,false);
        },this);
    },
    bakfram:function(text){
        var ny=[];
        
        for(var i=text.length-1;i>=0;i--){
            
        if(text[i]==' '){
            ny.push('_');
        }else{
            ny.push(text[i]);
        }
            
        }
        var skrev=this.add.text(game.world.centerX,150,'Du skrev: '+text,{fontSize:'20px',fill:'#fff'});
        skrev.anchor.setTo(0.5);
        
        var resultat=this.add.text(game.world.centerX,200,'Ditt resultat blev: '+ny.join(''),{fontSize:'20px',fill:'#fff'});
        resultat.anchor.setTo(0.5);
        
    },
}