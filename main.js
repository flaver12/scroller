class Game {

    init() {
        //Setup stage and renderer
        this.stage = new PIXI.Container();
        this.renderer = new PIXI.autoDetectRenderer(
            512,
            384,
            {view:document.getElementById('game-canvas')}
        );

        //Add Textures
        const farTexture = PIXI.Texture.fromImage("resources/bg-far.png");
        let far =new PIXI.extras.TilingSprite(
            farTexture, 
            512,
            256
        );
        far.position.x = 0;
        far.position.y = 0;
        far.tilePosition.x = 0;
        far.tilePosition.y = 0;

        const midTexture = PIXI.Texture.fromImage("resources/bg-mid.png");
        let mid = new PIXI.extras.TilingSprite(midTexture, 512, 256);
        mid.position.x = 0;
        mid.position.y = 128;
        mid.tilePosition.x = 0;
        mid.tilePosition.y = 0;

        this.far = far;
        this.mid = mid;
    }

    start() {
        this.stage.addChild(this.far);
        this.stage.addChild(this.mid);
        this.update();
    }

    update() {
        this.far.tilePosition.x -= 0.128;
        this.mid.tilePosition.x -= 0.64;

        this.renderer.render(this.stage);
        requestAnimationFrame(this.update.bind(this));
    }

}


window.onload = () => {
    const game = new Game();
    game.init();
    game.start();
    window.game = game;
}