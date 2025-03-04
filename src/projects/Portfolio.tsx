import {
  SmallReactDiv,
  SmallTailwindDiv,
  SmallAWSDiv,
  SmallTypescriptDiv,
  SmallCloudFrontDiv,
  SmallAWSS3Div,
  SmallGithubActionsDiv,
} from "../components/smallNamesWithIcons";
import { GithubSvg } from "../components/svgs";

export default function Portfolio() {
  return (
    <div id="project-3" className="project">
      <h3 className="project-title">Portfolio Website</h3>
      <p>
        This Section is to explain the current Website we are on. Below are the
        Technoloiges used to build this website.
      </p>
      <div className="flex max-xsm:flex-col justify-around items-center gap-16">
        <div>
          <h3 className="main-tech-title">Front End</h3>
          <div className="flex flex-col gap-2">
            <SmallReactDiv />
            <SmallTailwindDiv />
            <SmallTypescriptDiv />
          </div>
        </div>
        <div className="backend-stack">
          <div>
            <h3 className="main-tech-title">Back End</h3>
            <div className="flex flex-col gap-2">
              <SmallAWSDiv />
              <SmallGithubActionsDiv />
            </div>
          </div>
          <div>
            <h3 className="main-tech-title">Aws</h3>
            <SmallCloudFrontDiv />
            <SmallAWSS3Div />
          </div>
        </div>
      </div>
      <div>
        <p>The github link is Below</p>
        <a href="https://github.com/Julio-N-Coder/portfolio" target="_blank">
          <GithubSvg className="h-12" />
        </a>
      </div>
    </div>
  );
}
