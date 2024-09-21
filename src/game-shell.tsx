import { GameHeader } from "./components/layout/game-header";
import { GameMain } from "./components/layout/game-main";
import { GameFooter } from "./components/layout/game-footer";

export const GameShell = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <GameHeader />
      </header>
      <main className="flex-grow">
        <GameMain />
      </main>
      <footer>
        <GameFooter />
      </footer>
    </div>
  );
};
