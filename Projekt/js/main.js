//Beskriver att detta är ett spel och bestämmer höjd och bredd på spelet.
game = new Phaser.Game(800, 480, Phaser.AUTO);
//lägger till alla states som jag kommer att använda.
game.state.add('PreloadState', PreloadState);
game.state.add('HomeState', HomeState);  
game.state.add('GameState', GameState);
game.state.add('GameOver', GameOver);
//startar PreloadState
game.state.start('PreloadState')
