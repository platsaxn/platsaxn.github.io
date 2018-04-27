//I PreloadState så laddar jag in alla assets: bilder, musik och spritesheets
var PreloadState={
    
    preload:function(){
        this.load.image('ground', 'assets/images/ground.png');
        this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', 40, 42, 2, 1, 1);
        this.load.spritesheet('player', 'assets/images/player_spritesheet.png',56,60,6,2,2);
        this.load.spritesheet('bg1', 'assets/images/bg1.png');
        this.load.spritesheet('bg2', 'assets/images/bg1go.png');
        this.load.spritesheet('bgfore','assets/images/bg2.png');
        this.load.spritesheet('bgfore2','assets/images/bg3.png');
        this.load.spritesheet('bgfore3','assets/images/bg4.png');
        this.load.spritesheet('button','assets/images/button.png');
        this.load.audio('main','assets/sound/main.mp3');
        this.load.audio('dead','assets/sound/dead.mp3');
    },
    //startar HomeState
    create:function(){
       this.state.start('HomeState');
    }
};