import NavBar from "./components/NavBar/navBar";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import NavarroGardening from "./projects/NavarroGardening";
import Chatvious from "./projects/Chatvious";
import Portfolio from "./projects/Portfolio";
import JobTracker from "./projects/JobTracker";

function App() {
  return (
    <div className="antialiased">
      <NavBar />
      <div className="flex justify-center p-2">
        <h1 className="text-5xl xsm:text-6xl mdsm:text-7xl sm:text-8xl md:text-9xl p-12 text-center font-bold">
          Welcome to My Portfolio Website
        </h1>
      </div>
      <div className="mt-20 text-2xl xsm:text-3xl md:text-4xl text-center">
        <div className="flex flex-col gap-y-40">
          <div className="container mx-auto">
            Hello, I'm Julio. I am someone who is has been learning web
            development. In this Website, you will find some of the projects I
            have worked on. I hope you enjoy your stay!
          </div>
          <div>
            <div className="space-y-4 mb-20">
              <h2 className="text-4xl xsm:text-5xl mdsm:text-6xl md:text-7xl font-bold">
                Projects
              </h2>
              <h3 className="">Here Are some Projects I have made</h3>
            </div>
            {/* Projects */}
            <div className="flex flex-col gap-60">
              <Chatvious />
              <NavarroGardening />
              <Portfolio />
              <JobTracker />
            </div>
          </div>
        </div>
        <p className="text-2xl mdsm:text-3xl mt-12 p-6 py-20 border-t border-base-content">
          Thank you for checking out my website and I hope you enjoyed what you
          have seen! If you would like to see my socials or contact me, you can
          do so by going to the contact me page.&nbsp;
          <Link to="/contact-me" className="link link-info">
            Contact Me
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
