function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
      <div className="w-max flex flex-col items-center">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-yellow-500 drop-shadow-xl">
          Sirwan Afifi
        </h1>
        <span className="text-lime-200">
          Published at:{" "}
          <span className="font-bold">
            {import.meta.env.VITE_PUBLISHDATETIME || "Not Updated Yet"}
          </span>
        </span>
      </div>
    </div>
  );
}

export default App;
