import { GithubSvg } from "../components/svgs";
import {
  SmallReactDiv,
  SmallTailwindDiv,
  SmallTypescriptDiv,
  SmallJavaDiv,
  SmallSpringBootDiv,
} from "../components/smallNamesWithIcons";

export default function JobTracker() {
  return (
    <div id="project-3" className="project">
      <h3 className="project-title">Job Tracker</h3>
      <div className="projectTextContainer">
        <p>
          This project is a Job Tracking project and it's simply called Job
          Tracker. This project lets you track job applications. You can add
          jobs, update their status, remove jobs, and make multiple accounts to
          manage different jobs.
        </p>
        <div className="tech-stack">
          <div>
            <h3 className="main-tech-title">Front End</h3>
            <SmallReactDiv />
            <SmallTailwindDiv />
            <SmallTypescriptDiv />
          </div>
          <div className="backend-stack">
            <div>
              <h3 className="main-tech-title">Back End</h3>
              <SmallJavaDiv />
              <SmallSpringBootDiv />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <p>Link to github repo</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Julio-N-Coder/Job-Tracker"
              target="_blank"
            >
              <GithubSvg className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
