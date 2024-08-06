import { makeAutoObservable } from "mobx";

export enum Direction {
  up = "↑",
  down = "↓",
  left = "←",
  right = "→",
}

export class Robot {
  indexX: number;
  indexY: number;
  currentDirection: Direction;

  constructor(x: number, y: number, direction: Direction) {
    this.indexX = x;
    this.indexY = y;
    this.currentDirection = direction;
    makeAutoObservable(this);
  }
}
