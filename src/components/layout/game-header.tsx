import { ModeToggle } from "@/components/mode-toggle";
import { PauseToggle } from "../pause-toggle";

export const GameHeader = () => {
  return (
    <div className="border-b py-3 px-3 flex items-center justify-between">
      <div id="logo">
        <p>Hello, header!</p>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <PauseToggle />
      </div>
    </div>
  );
};
