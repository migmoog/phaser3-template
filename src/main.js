import Main from "./scenes/Main.js";

class P extends Phaser.Scene {
    preload() {

    }

    create() {
        this.scene.switch('main');
    }
}

const game = new Phaser.Game({
    scene: [P, Main]
});