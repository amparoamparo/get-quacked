import Phaser from "phaser";

export default class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: "boot",
    });
  }

  preload() {
    this.load.image("duck", "../assets/images/duck.png");
    this.load.image("bullet", "../assets/images/egg.png");
    this.load.image("hunter", "../assets/images/hunter.png");
    this.load.image("background", "../assets/images/background.png");
    this.load.spritesheet("boom", "explosion.png", {
      frameWidth: 64,
      frameHeight: 64,
      endFrame: 23,
    });

    this.load.on("complete", () => {
      this.scene.start("play");
    });
  }
}
