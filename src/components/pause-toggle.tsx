import { Button } from "@/components/ui/button";
import { GameIcon } from "@/components/game-icon";
import { useGameStateStore } from "@/lib/game-state-store";

export const PauseToggle = () => {
  const { gameIsPaused, setGameIsPaused } = useGameStateStore();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setGameIsPaused(!gameIsPaused)}
    >
      {gameIsPaused ? <GameIcon.Resume /> : <GameIcon.Pause />}
    </Button>
  );
};
