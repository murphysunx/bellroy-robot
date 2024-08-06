import { Direction, Robot } from "@/app/models/robot";
import { observer } from "mobx-react-lite";

interface RobotViewProps {
  robot: Robot;
}

function getRobotNotation(robot: Robot) {
  const { currentDirection } = robot;
  switch (currentDirection) {
    case Direction.up:
      return "⬆️";
    case Direction.down:
      return "⬇️";
    case Direction.left:
      return "⬅️";
    case Direction.right:
      return "➡️";
    default:
      throw new Error("Unknown direction");
  }
}

export const RobotView = observer(({ robot }: RobotViewProps) => {
  const notation = getRobotNotation(robot);
  return <span>{notation}</span>;
});
