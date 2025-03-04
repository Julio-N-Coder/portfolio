import { GithubSvg } from "../components/svgs";
import { Link } from "react-router-dom";

export default function JobTracker() {
  return (
    <div id="project-3" className="project">
      <h3 className="project-title">Job Tracker</h3>
      <p>
        I am currently working in this project. This project is a Job Tracking
        website. It lets you track job applications all in one place.
      </p>
      <a href="https://github.com/Julio-N-Coder/Job-Tracker" target="_blank">
        <GithubSvg className="h-12" />
      </a>
    </div>
  );
}
