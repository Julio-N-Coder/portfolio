import NavBar from "../components/NavBar/navBar";
import Footer from "../components/footer";

export default function ContactMe() {
  return (
    <div className="antialiased">
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <NavBar />
          <div className="text-3xl text-center flex flex-col gap-6">
            <div>
              <h2 className="font-bold underline">Email</h2>
              <a
                className="link link-info"
                href="mailto:julio.coder.socials@gmail.com"
                target="_blank"
              >
                julio.coder.socials@gmail.com
              </a>
            </div>
            <div>
              <h2 className="font-bold underline">Github</h2>
              <a
                className="link link-info"
                href="https://github.com/Night-Coder-404/chatvious"
                target="_blank"
              >
                https://github.com/Night-Coder-404/chatvious
              </a>
            </div>
            <div>
              <h2 className="font-bold underline">Linkedin</h2>
              <a
                className="link link-info"
                href="https://www.linkedin.com/in/julio-navarro-824983266"
                target="_blank"
              >
                https://www.linkedin.com/in/julio-navarro-824983266
              </a>
            </div>
            <div>
              <h2 className="font-bold underline">Twitter</h2>
              <a
                className="link link-info"
                href="https://twitter.com/Night_Coder_404"
                target="_blank"
              >
                https://twitter.com/Night_Coder_404
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
