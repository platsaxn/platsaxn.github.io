var game=new Phaser.Game(720,640,Phaser.AUTO);

game.state.add('GameState',GameState);
game.state.add('GameStart',GameStart);
game.state.add('GameOver',GameOver);
game.state.start('GameStart');