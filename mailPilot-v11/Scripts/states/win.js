/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
var states;
(function (states) {
    function winState() {
        ocean.update();
    }
    states.winState = winState;
    // Game Over Scene
    function win() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //sound create
        constants.engineSound = createjs.Sound.play('win', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "WIN!!");
        game.addChild(gameOverLabel);
        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);
        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreBoard_L3.score.toString());
        game.addChild(finalScore);
        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 280, "tryAgainButton", currentState);
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", states.tryAgainClicked);
        // Display Try Again Button
        backButton = new objects.Button(stage.canvas.width / 2, 360, "backButton", currentState);
        game.addChild(backButton);
        backButton.addEventListener("click", states.backClicked);
        // Display Play Again Button
        msgButton = new objects.Button(stage.canvas.width / 2, 430, "instructionsButton", currentState);
        game.addChild(msgButton);
        msgButton.addEventListener("click", states.msgButtonClicked);
        stage.addChild(game);
    }
    states.win = win;
})(states || (states = {}));
//# sourceMappingURL=win.js.map