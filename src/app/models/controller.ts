import { runInAction } from "mobx";
import { Grid } from "./grid";
import { Direction, Robot } from "./robot";

export class Controller {
  constructor(private grid: Grid, private robot: Robot) {}

  command(direction: Direction) {
    if (direction === this.robot.currentDirection) {
      // move
      switch (direction) {
        case Direction.up:
          if (this.robot.indexY > 0) {
            runInAction(() => this.robot.indexY--);
          }
          break;
        case Direction.down:
          if (this.robot.indexY < this.grid.height - 1) {
            runInAction(() => this.robot.indexY++);
          }
          break;
        case Direction.left:
          if (this.robot.indexX > 0) {
            runInAction(() => this.robot.indexX--);
          }
          break;
        case Direction.right:
          if (this.robot.indexX < this.grid.width - 1) {
            runInAction(() => this.robot.indexX++);
          }
          break;
        default:
          console.error("Unknown direction from command");
      }
    } else {
      // change facing direction
      runInAction(() => (this.robot.currentDirection = direction));
    }
  }
}
