var PreloadState={
    preload:function(){
        this.load.image('ground', 'assets/images/ground.png');
        this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', 20, 21, 2, 1, 1);
        this.load.spritesheet('player', 'assets/images/player_spritesheet.png',28,30,5,1,1);
        this.load.spritesheet('bg1', 'assets/images/bg1.png');
        this.load.spritesheet('bg2', 'assets/images/bg2.png');
    },
    create:function(){
       this.state.start('HomeState');
    }
};