import {
  SmallReactDiv,
  SmallTailwindDiv,
  SmallNodejsDiv,
  SmallAWSDiv,
  SmallTypescriptDiv,
  SmallCloudFrontDiv,
  SmallAWSS3Div,
  SmallAWSLambdaDiv,
  SmallAWSApiGatewayDiv,
} from "../components/smallNamesWithIcons";
import { GithubSvg } from "../components/svgs";

export default function NavarroGardening() {
  return (
    <div id="project-1" className="project">
      <h3 className="project-title">Navarro Gardening</h3>
      <p>
        This is my first website I have made and hosted. This website is built
        with tailwind and react. The Static Website content is hosted on AWS in
        an s3 bucket that has cloudfront distributing the static content. The
        website also has a lambda function backend in Nodejs that can be used to
        send emails.
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
            <SmallNodejsDiv />
            <SmallTypescriptDiv />
            <SmallAWSDiv />
          </div>
          <div>
            <h3 className="main-tech-title">Aws</h3>
            <SmallAWSLambdaDiv />
            <SmallCloudFrontDiv />
            <SmallAWSS3Div />
            <SmallAWSApiGatewayDiv />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <p>
            If you would like to check out the website or the github repo for
            your self, the links are below.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.navarrogardening.com"
              target="_blank"
              className="link link-info"
            >
              NavarroGardening
            </a>
            <a
              href="https://github.com/Julio-N-Coder/NavarroGardening"
              target="_blank"
            >
              <GithubSvg className="h-12" />
            </a>
          </div>
        </div>
        <iframe
          src="https://www.navarrogardening.com"
          title="navarro gardening website"
          className="w-full ifram-height"
        ></iframe>
      </div>
    </div>
  );
}
