"use client";
import { ControllerView } from "./components/controller/Controller";
import { GridView } from "./components/grid/Grid";
import { Controller } from "./models/controller";
import { Grid } from "./models/grid";
import { Direction, Robot } from "./models/robot";

export default function Home() {
  const grid = new Grid(5, 5);
  const robot = new Robot(0, 0, Direction.right);
  const controller = new Controller(grid, robot);

  return (
    <div className="w-screen h-screen flex justify-center items-center gap-28">
      <GridView grid={grid} robot={robot} />
      <ControllerView controller={controller} />
    </div>
  );
}
