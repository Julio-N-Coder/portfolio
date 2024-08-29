import {
  SmallReactDiv,
  SmallTailwindDiv,
  SmallNodejsDiv,
  SmallEjsDiv,
  SmallAWSDiv,
  SmallAWSSamDiv,
  SmallTypescriptDiv,
} from "./components/smallNamesWithIcons";
import { GithubSvg } from "./components/svgs";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="antialiased">
      <NavBar />
      <div className="flex justify-center p-2">
        <h1 className="text-9xl p-12 text-center font-bold">
          Welcome to My Portfolio Website
        </h1>
      </div>
      <div className="mt-20 text-4xl text-center">
        <div className="flex flex-col gap-y-40">
          <div className="container mx-auto">
            Hello, I'm Julio. I am someone who is has been learning web
            development. In this Website, you will find some of the projects I
            have worked on. I hope you enjoy your stay!
          </div>
          <div className="space-y-6">
            <h2 className="text-7xl">Projects</h2>
            <h3>Here Are some Projects I have made</h3>
            {/* Projects */}
            <div className="flex flex-col border-y-2 border-base-content divide-y-2 divide-base-content">
              <div id="project-1">
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
                  <div>
                    <p>
                      If you would like to check out the website or the github
                      repo for your self, the links are below.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.navarrogardening.com"
                        target="_blank"
                        className="link link-info"
                      >
                        NavarroGardening
                      </a>
                      <a
                        href="https://github.com/Night-Coder-404/NavarroGardening"
                        target="_blank"
                      >
                        <GithubSvg className="h-12" />
                      </a>
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://www.navarrogardening.com"
                  title="navarro gardening website"
                  className="w-full ifram-height"
                ></iframe>
              </div>
              <div id="project-2">
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
                      <div>
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
                      The Links Below are to the website, the github repo, and a
                      page for more info about this project
                    </p>
                    <div className="flex gap-6">
                      <a
                        href="https://main.chatvious.coding-wielder.com/"
                        target="_blank"
                        className="link link-info"
                      >
                        Chatvious Website
                      </a>
                      <Link to="/chatvious-info" className="link link-info">
                        More Info About Chatvious
                      </Link>
                      <a
                        href="https://github.com/Night-Coder-404/chatvious"
                        target="_blank"
                      >
                        <GithubSvg className="h-12" />
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
              <div id="project-3">
                <div className="projectTextContainer">
                  <p>
                    This Section is to explain the current Website we are on.
                    Below are the Technoloiges used to build this website.
                  </p>
                  <div className="flex justify-around gap-16">
                    <div>
                      <h3 className="text-3xl text-center underline font-bold">
                        Front End
                      </h3>
                      <div className="flex gap-2">
                        <SmallReactDiv />
                        <SmallTailwindDiv />
                        <SmallTypescriptDiv />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>The github link is Below</p>
                    <a
                      href="https://github.com/Night-Coder-404/portfolio"
                      target="_blank"
                    >
                      <GithubSvg className="h-12" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-3xl mt-12 p-6">
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
