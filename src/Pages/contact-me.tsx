import NavBar from "../components/NavBar/navBar";
import Footer from "../components/footer";

export default function ContactMe() {
  return (
    <div className="antialiased">
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <NavBar />
          <div className="">
            <div>Email</div>
            <div>Github</div>
            <div>Linkedin</div>
            <div>Twitter</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
