import { Controller } from "@/app/models/controller";
import { Direction, Robot } from "@/app/models/robot";

interface ControllerViewProps {
  controller: Controller;
}

export function ControllerView({ controller }: ControllerViewProps) {
  return (
    <div>
      <div className="flex">
        <div className="w-10 h-10 border border-solid border-gray-500 flex justify-center items-center"></div>
        <div className="w-10 h-10 border border-solid border-gray-500 flex justify-center items-center">
          <button onClick={() => controller.command(Direction.up)}>
            {Direction.up}
          </button>
        </div>
        <div className="w-10 h-10 border border-solid border-gray-500 flex justify-center items-center"></div>
      </div>
      <div className="flex">
        <div className="w-10 h-10 border border-solid border-gray-500 flex justify-center items-center">
          <button onClick={() => controller.command(Direction.left)}>
            {Direction.left}
          </button>
        </div>
        <div className="w-10 h-10 border border-solid border-gray-500 flex justify-center items-center"></div>
        <div className="w-10 h-10 border border-solid border-gray-500 flex justify-center items-center">
          <button onClick={() => controller.command(Direction.right)}>
            {Direction.right}
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-10 h-10 border border-solid border-gray-500 flex justify-center items-center"></div>
        <div className="w-10 h-10 border border-solid border-gray-500 flex justify-center items-center">
          <button onClick={() => controller.command(Direction.down)}>
            {Direction.down}
          </button>
        </div>
        <div className="w-10 h-10 border border-solid border-gray-500 flex justify-center items-center"></div>
      </div>
    </div>
  );
}
