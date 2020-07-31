import Ball from "./ball";

export default class MainMenu {
  constructor(game) {
    this.game = game;
    this.ctx = game.ctx;
  }

  displayMainMenu(ctx, game) {
    ctx.rect(0, 0, game.gameWidth, game.gameHeight);
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fill();

    ctx.font = "46px Courier New";
    ctx.fillStyle = "#C5EBFE";
    ctx.textAlign = "center";
    ctx.fillText("Main Menu", 200, 100);

    ctx.fillRect(40, 125, 720, 1);

    /*ctx.font = "30px Courier New";
    ctx.fillStyle = "#FEFD97";
    ctx.fillText(
      "Press SPACEBAR to go back",
      this.gameWidth / 2,
      this.gameHeight - 50
    );*/

    ctx.fillStyle = "#C5EBFE";
    ctx.fillRect(game.gameWidth / 2 - 105, 520, 210, 50);
    ctx.font = "23px Courier New";
    ctx.fillStyle = "#000";
    ctx.fillText("Start New Game", game.gameWidth / 2, 553);

    ctx.fillStyle = "#FEFD97";
    ctx.fillRect(45, 520, 140, 50);
    ctx.font = "23px Courier New";
    ctx.fillStyle = "#000";
    ctx.fillText("Go back", 115, 553);

    ctx.textAlign = "left";
    ctx.font = "23px Courier New";
    ctx.fillStyle = "#C5EBFE";
    ctx.fillText("Paddle color:", 100, 220);
    //ctx.fillText("Ball color:", 100, 320);
    ctx.fillText("Background color:", 100, 320);

    ctx.fillStyle = "#C5EBFE";
    ctx.fillRect(375, 187, 50, 50);
    ctx.fillStyle = "#B49FDC";
    ctx.fillRect(425, 187, 50, 50);
    ctx.fillStyle = "#FEFD97";
    ctx.fillRect(475, 187, 50, 50);
    ctx.fillStyle = "#A5F8CE";
    ctx.fillRect(525, 187, 50, 50);
    ctx.fillStyle = "#FEC9A7";
    ctx.fillRect(575, 187, 50, 50);
    ctx.fillStyle = "#F197C0";
    ctx.fillRect(625, 187, 50, 50);

    /*ctx.fillStyle = "#C5EBFE";
    ctx.fillRect(375, 287, 50, 50);
    ctx.fillStyle = "#B49FDC";
    ctx.fillRect(425, 287, 50, 50);
    ctx.fillStyle = "#FEFD97";
    ctx.fillRect(475, 287, 50, 50);
    ctx.fillStyle = "#A5F8CE";
    ctx.fillRect(525, 287, 50, 50);
    ctx.fillStyle = "#FEC9A7";
    ctx.fillRect(575, 287, 50, 50);
    ctx.fillStyle = "#F197C0";
    ctx.fillRect(625, 287, 50, 50);*/

    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "red";
    ctx.rect(375 + game.paddle.color * 50, 187, 50, 50);
    ctx.stroke();

    ctx.fillStyle = "#B49FDC";
    ctx.fillRect(game.gameWidth - 220, 550, 150, 20);
    ctx.drawImage(
      document.getElementById("imgBall"),
      game.gameWidth - 155,
      510,
      16,
      16
    );
    //this.ballAnim(this.ctx, this.game);
  }

  click(event) {
    let mouseX = event.pageX;
    let mouseY = event.pageY;

    if (mouseY > 187 && mouseY < 237) {
      if (mouseX > 375 && mouseX < 425) {
        this.game.paddle.color = 0;
      } else if (mouseX > 425 && mouseX < 475) {
        this.game.paddle.color = 1;
      } else if (mouseX > 475 && mouseX < 525) {
        this.game.paddle.color = 2;
      } else if (mouseX > 525 && mouseX < 575) {
        this.game.paddle.color = 3;
      } else if (mouseX > 575 && mouseX < 625) {
        this.game.paddle.color = 4;
      } else {
        this.game.paddle.color = 5;
      }
    }
  }
}
