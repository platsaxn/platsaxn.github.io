var PreloadState={
    
    preload:function(){
        this.load.image('ground', 'assets/images/ground.png');
        this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', 40, 42, 2, 1, 1);
        this.load.spritesheet('player', 'assets/images/player_spritesheet.png',56,60,5,2,2);
        this.load.spritesheet('bg1', 'assets/images/bg1.png');
        this.load.spritesheet('bg2', 'assets/images/bg1go.png');
        this.load.spritesheet('button','assets/images/button.png');
    },
    create:function(){
       this.state.start('HomeState');
    }
};