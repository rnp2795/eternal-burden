export const tick = () => {
  // TODO: Import from game state.
  const gameIsPaused = false;

  const tickRunInterval = 300;

  const tickRun = () => {};

  setInterval(() => {
    if (!gameIsPaused) {
      tickRun();
    }
  }, tickRunInterval);
};
