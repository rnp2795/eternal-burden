import { useGameStateStore } from "@/lib/game-state-store";

const onTick = () => {};

export const tick = () => {
  setInterval(() => {
    // Get a list of conditions to check if the game should tick.
    const gameIsPaused = useGameStateStore.getState().gameIsPaused;

    if (!gameIsPaused) {
      onTick();
    }
  }, 300);
};
