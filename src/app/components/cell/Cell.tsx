import { Robot } from "@/app/models/robot";
import { RobotView } from "../robot/Robot";
import { observer } from "mobx-react-lite";

interface CellViewProps {
  robot?: Robot;
}

export const CellView = ({ robot }: CellViewProps) => {
  return (
    <div className="w-20 h-20 border border-solid border-gray-600 flex justify-center items-center">
      {robot && <RobotView robot={robot} />}
    </div>
  );
};
