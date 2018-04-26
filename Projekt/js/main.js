
game = new Phaser.Game(900, 700, Phaser.AUTO);

game.state.add('PreloadState', PreloadState);
game.state.add('HomeState', HomeState);  
game.state.add('GameState', GameState);
game.state.add('GameOver', GameOver);

game.state.start('PreloadState')
