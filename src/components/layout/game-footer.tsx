export const GameFooter = () => {
  return (
    <div className="border-t py-3 px-3 flex items-center justify-center">
      <div>
        <p>{`${import.meta.env.VITE_GAME_NAME} version ${
          import.meta.env.VITE_GAME_VERSION
        }`}</p>
      </div>
    </div>
  );
};
