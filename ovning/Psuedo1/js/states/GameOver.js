var GameOver={
    create:function(){
        this.add.sprite(0,0,'background');
        
        var namn=this.add.text(game.world.centerX,200,'Tack för att du använde WordFLipper!',{fontSize:'35px',fill:'#fff'});
        namn.anchor.setTo(0.5);
    },
}