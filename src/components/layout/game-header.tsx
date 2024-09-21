import { ModeToggle } from "@/components/mode-toggle";
import { PauseToggle } from "../pause-toggle";
import { useGameStateStore } from "@/lib/game-state-store";

export const GameHeader = () => {
  const { gameIsPaused } = useGameStateStore();
  return (
    <div className="border-b py-3 px-3 flex items-center justify-between">
      <div id="logo">
        <p>{import.meta.env.VITE_GAME_NAME}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">
          {gameIsPaused && "Game is paused."}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <PauseToggle />
      </div>
    </div>
  );
};
