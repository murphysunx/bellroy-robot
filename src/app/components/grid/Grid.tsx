import { Grid } from "@/app/models/grid";
import { Robot } from "@/app/models/robot";
import { CellView } from "../cell/Cell";
import { observer } from "mobx-react-lite";

interface GridViewProps {
  grid: Grid;
  robot: Robot;
}

export const GridView = observer(({ grid, robot }: GridViewProps) => {
  const { height, width } = grid;

  return (
    <div className="border-2 border-gray-700">
      {Array.from({ length: height }).map((_, indexY) => {
        return (
          <div key={"row-" + indexY} className="flex">
            {Array.from({ length: width }).map((_, indexX) => {
              const hasRobot =
                indexX === robot.indexX && indexY === robot.indexY;
              return (
                <CellView
                  key={"cell-" + indexX + "-" + indexY}
                  robot={hasRobot ? robot : void 0}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
});
