﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/level1/scoreboard.ts" />


/// <reference path="../objects/ocean.ts" />

/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        //plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();

        constants.CURRENT_PLANE_GAS = constants.PLANE_GAS;
        constants.CURRENT_BULLETS = constants.BULLET_COUNT;
        constants.CURRENT_SCORE = 0;
        constants.engineSound.stop();
        currentState = constants.PLAY_LEVEL1_STATE;
        changeState(currentState);
    }

    export function exitButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        //plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        constants.engineSound.stop();
        currentState = constants.HOME_STATE;
        changeState(currentState);
    }

    export function menuState() {
        ocean.update();
        //plane.update();
    }

    

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        //plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "default";

        //sound create
        constants.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 60, "Space War Z");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 250, "playButton", currentState);
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Play Again Button
        msgButton = new objects.Button(stage.canvas.width / 2, 330, "instructionsButton", currentState);
        game.addChild(msgButton);
        msgButton.addEventListener("click", msgButtonClicked);

        stage.addChild(game);
    }
} 