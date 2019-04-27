import RoomScene from './rooms/scene.js'

const config = {
    type: Phaser.CANVAS,
    scene: RoomScene,
    disableContextMenu: true,
    banner: false,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade'
    },
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
        resolution: window.devicePixelRatio,
        autoRound: true,
    },
}

const game = new Phaser.Game(config)

window.addEventListener('resize', () => {
    
    game.scale.resize(window.innerWidth, window.innerHeight);

}, false);
