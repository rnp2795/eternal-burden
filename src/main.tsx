import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GameShell } from "./game-shell";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameShell />
  </StrictMode>
);
