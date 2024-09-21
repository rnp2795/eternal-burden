import { ModeToggle } from "@/components/mode-toggle";

export const GameHeader = () => {
  return (
    <div className="border-b py-3 px-3 flex items-center justify-between">
      <div id="logo">
        <p>Hello, header!</p>
      </div>
      <ModeToggle />
    </div>
  );
};
