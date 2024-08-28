import ThemeController from "./components/themeController";
import {
  SmallReactDiv,
  SmallTailwindDiv,
  SmallNodejsDiv,
  SmallEjsDiv,
  SmallAWSDiv,
  SmallAWSSamDiv,
  SmallTypescriptDiv,
} from "./components/smallNamesWithIcons";

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
      <div className="mt-20 text-4xl text-center">
        <div className="flex flex-col gap-y-40">
          <div className="container mx-auto">
            Hello, I'm Julio. I am someone who is has been learning web
            development. In this portfolio, you will find some of the projects I
            have worked on. I hope you enjoy your stay!
          </div>
          <div className="space-y-6">
            <h2 className="text-7xl">Projects</h2>
            <h3>Here Are some Projects I have made</h3>
            {/* Projects */}
            <div className="flex flex-col border-y-2 border-base-content divide-y-2 divide-base-content">
              <div id="project-1" className="">
                <div className="projectTextContainer">
                  <p>
                    This is my first website I have made and hosted. This
                    website is built with tailwind and react. The Static Website
                    content is hosted on AWS in an s3 bucket that has cloudfront
                    distributing the static content. The website also has a
                    lambda function backend in Nodejs that can be used to send
                    emails.
                  </p>
                  <div className="flex justify-around gap-16">
                    <div>
                      <h3 className="text-3xl underline font-bold">
                        Front End
                      </h3>
                      <SmallReactDiv />
                      <SmallTailwindDiv />
                      <SmallTypescriptDiv />
                    </div>
                    <div>
                      <h3 className="text-3xl underline font-bold">Back End</h3>
                      <SmallNodejsDiv />
                      <SmallTypescriptDiv />
                      <SmallAWSDiv />
                    </div>
                  </div>
                  <p>
                    If you would like to check out the website for your self you
                    can click the link below.
                  </p>
                  <a
                    href="https://www.navarrogardening.com"
                    target="_blank"
                    className="link link-info"
                  >
                    NavarroGardening
                  </a>
                </div>
                <iframe
                  src="https://www.navarrogardening.com"
                  title="navarro gardening website"
                  className="w-full ifram-height"
                ></iframe>
              </div>
              <div id="project-2" className="">
                <div className="projectTextContainer">
                  <p>
                    This is my biggest project I have made so far. I will go
                    over a breif overview of it right now but If you would like
                    to know more, there is a link at the bottom of this text
                    that goes more in depth. This project is a real time chat
                    application and it's made with a few different technologies
                    which are shown below.
                  </p>
                  <div className="flex justify-around gap-16">
                    <div>
                      <h3 className="text-3xl underline font-bold">
                        Front End
                      </h3>
                      <SmallReactDiv />
                      <SmallTailwindDiv />
                      <SmallTypescriptDiv />
                    </div>
                    <div>
                      <h3 className="text-3xl underline font-bold">Back End</h3>
                      <div className="">
                        <SmallNodejsDiv />
                        <SmallTypescriptDiv />
                        <SmallEjsDiv />
                        <SmallAWSDiv />
                        <SmallAWSSamDiv />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      The Links Below are to the website and a page for more
                      info about this project
                    </p>
                    <div className="flex gap-6">
                      <a
                        href="https://main.chatvious.coding-wielder.com/"
                        target="_blank"
                        className="link link-info"
                      >
                        Chatvious Website
                      </a>
                      <a className="link link-info">
                        More Info About Chatvious
                      </a>
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://main.chatvious.coding-wielder.com/"
                  title="Chatvious Website"
                  className="w-full ifram-height"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
