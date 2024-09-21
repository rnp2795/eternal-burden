import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GameShell } from "./game-shell";
import { ThemeProvider } from "./components/theme-provider";
import { tick } from "./lib/tick";

tick();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="game-ui-theme">
      <GameShell />
    </ThemeProvider>
  </StrictMode>
);
