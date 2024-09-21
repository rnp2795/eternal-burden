import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface GameState {
  gameIsPaused: boolean;
  setGameIsPaused: (gameIsPaused: boolean) => void;
}

export const useGameStateStore = create<GameState>()(
  persist(
    (set) => ({
      gameIsPaused: false, // By default, the game runs on load.
      setGameIsPaused: (gameIsPaused: boolean) => {
        set({ gameIsPaused });
      },
    }),
    {
      name: "game-state-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
