//Points Breakdown
//15 Parallax Scrolling
//10 New Background
//10 Music
//25 New Art Assets
//10 FIRE UI
let config={
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
//reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;

let game=new Phaser.Game(config);

//define game settings
game.settings=
{
    spaceshipSpeed: 3,
    gameTimer: 60000
}