import {
  SmallReactDiv,
  SmallTailwindDiv,
  SmallNodejsDiv,
  SmallEjsDiv,
  SmallAWSDiv,
  SmallAWSSamDiv,
  SmallTypescriptDiv,
  SmallCloudFrontDiv,
  SmallAWSS3Div,
  SmallAWSLambdaDiv,
  SmallAWSApiGatewayDiv,
  SmallAWSDynamoDBDiv,
  SmallAWSCognitoDiv,
  SmallGithubActionsDiv,
} from "../components/smallNamesWithIcons";
import { GithubSvg } from "../components/svgs";
import { Link } from "react-router";

export default function Chatvious() {
  return (
    <div id="project-2" className="project">
      <h3 className="project-title">Chatvious</h3>
      <div className="projectTextContainer">
        <p>
          This is my biggest project I have made so far. I will go over a breif
          overview of it right now but If you would like to know more, there is
          a link at the bottom of this section that goes more in depth. This
          project is a real time chat application and it's made with a few
          different technologies which are shown below. With this project, I
          went a more serverless approach on the design to learn more about
          serverless technologies. There is a nice diagram about the
          infrastructure in the more info page to show how this works visually
          if you would like to see that.
        </p>
        <div className="tech-stack">
          <div>
            <h3 className="main-tech-title">Front End</h3>
            <SmallReactDiv />
            <SmallTailwindDiv />
            <SmallTypescriptDiv />
            <SmallEjsDiv />
          </div>
          <div className="backend-stack">
            <div>
              <h3 className="main-tech-title">Back End</h3>
              <SmallNodejsDiv />
              <SmallTypescriptDiv />
              <SmallEjsDiv />
              <SmallAWSDiv />
              <SmallAWSSamDiv />
              <SmallGithubActionsDiv />
            </div>
            <div>
              <h3 className="main-tech-title">Aws</h3>
              <SmallAWSLambdaDiv />
              <SmallAWSDynamoDBDiv />
              <SmallCloudFrontDiv />
              <SmallAWSS3Div />
              <SmallAWSApiGatewayDiv />
              <SmallAWSCognitoDiv />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <p>
            The Links Below are to the website, the github repo, and a page for
            more info about this project
          </p>
          <div className="flex items-center gap-6">
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
              href="https://github.com/Julio-N-Coder/chatvious"
              target="_blank"
            >
              <GithubSvg className="h-12" />
            </a>
          </div>
        </div>
        <iframe
          src="https://main.chatvious.coding-wielder.com/"
          title="Chatvious Website"
          className="w-full ifram-height border-b border-base-content"
        ></iframe>
      </div>
    </div>
  );
}
