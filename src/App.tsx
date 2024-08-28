import ThemeController from "./components/themeController";

function App() {
  return (
    <div className="antialiased">
      {/* NavBar */}
      <nav className="bg-base-300 text-2xl flex justify-between items-center p-2">
        <div className="flex">
          <button className="btn btn-ghost text-2xl">Home</button>
          <button className="btn btn-ghost text-2xl">Contact Me</button>
        </div>
        <ThemeController />
      </nav>
      {/* Content */}
      <div className="flex justify-center p-2">
        <h1 className="text-9xl p-12 text-center font-bold">
          Welcome to My Portfolio Website
        </h1>
      </div>
      <div className="mt-20 container flex flex-col mx-auto text-4xl text-center">
        <div className="">
          Hello, I'm Julio. I am someone who is has been learning web
          development. In this portfolio, you will find some of the projects I
          have worked on. I hope you enjoy your stay!
        </div>
      </div>
    </div>
  );
}

export default App;
