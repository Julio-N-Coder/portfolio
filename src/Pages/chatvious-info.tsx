import NavBar from "../components/NavBar/navBar";
import Footer from "../components/footer";
import {
  SmallAWSLambdaDiv,
  SmallAWSApiGatewayDiv,
  SmallAWSDynamoDBDiv,
  SmallAWSCognitoDiv,
  SmallCloudFrontDiv,
  SmallAWSS3Div,
} from "../components/smallNamesWithIcons";
import chatviousAwsInfrustructure from "../assets/chatvious-aws-infrustructure-1920-1800.avif";

export default function ChatviousInfo() {
  return (
    <div className="antialiased">
      <NavBar />
      <div className="container mx-auto  text-xl">
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h4 id="overview-frontend" className="inner-title">
              Front End
            </h4>
            <div className="text-box">
              <p>
                For The front end of chatvious I used a both{" "}
                <span className="font-bold">React</span> and{" "}
                <span className="font-bold">Ejs</span>. Only the main page and
                the about page are rendered with react. The other pages are all
                rendered with ejs in lambda functions and send the client the
                html. The reason I choose react for the main and about pages are
                because they didn't need anything that needs to be fetched from
                a database. The reason I choose ejs for the rest of the pages
                was not just because I needed to fetch stuff from a database but
                also I wanted to try to use server side rendering for html.
              </p>
              <p>
                After building it, It didn't seem to bad but one thing I did
                notice was how much cold starts affected page loads. This was a
                noticable difference and I know this wouldn't be as bad if it
                were hosting this on a long running server, or justed used react
                to show a loading status before showing what needs to be shown.
              </p>
              <p>
                I used <span className="font-bold">Webpack</span> to bundle the
                front end. This was my first project using webpack and it's
                seems pretty overwhelming but I do like the extensibilatiy it
                offer compared to other bundlers.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-2">
              <h4 id="overview-backend" className="inner-title">
                Back End
              </h4>
              <div className="text-box">
                <p>
                  For The backend, I used a lot of{" "}
                  <span className="font-bold">AWS Resouces</span>. The reason
                  for this was because I wanted to learn more about serverless
                  technologies because that seemed important to know if I wanted
                  to get into web development. While making this project, I did
                  learn a lot about serverless technologies and web development
                  in general. This Project was originally going to be just a
                  nodejs project with the express framework and some serverless
                  technologies, but then I just transistioned to a more
                  serverless approach.
                </p>
                <p>
                  I also used a tool Called{" "}
                  <span className="font-bold">AWS Sam.</span> This is an
                  infrustructure as code (IaC) tool that help me in a few
                  different ways. It can build and package lambda functions,
                  Locally test Lambda functions, Run an api gateway rest api
                  locally, and build and deploy my IaC Sam templates. Sam uses{" "}
                  <span className="font-bold">CloudFormation</span> Under the
                  hood so when it builds the Sam templates, it turns them into
                  CloudFormation templates and deployes that. It also Abstracts
                  some resouce defintions on the template like lambda functions
                  and api gateway but I still had to write many of the resouces
                  in the same way as someone would with CloudFormation. If you
                  would like to check it out, here is a link to the
                  documentation.{" "}
                  <a
                    className="link link-info"
                    href="https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html"
                  >
                    AWS Sam Documentation
                  </a>
                </p>
                <p>Below this text shows the aws resouces used.</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <SmallAWSLambdaDiv className="aws-icon-text" />
                <p>
                  The backend compute which is mainly invoked and ran by Api
                  Gateway. They all use nodejs runtimes.
                </p>
              </div>
              <div>
                <SmallAWSApiGatewayDiv
                  className="aws-icon-text"
                  appendingText=" (Rest Api)"
                />
                <p>
                  The app utilizes a REST Api Gateway to handle HTTP requests
                  from the client.
                </p>
              </div>
              <div>
                <SmallAWSApiGatewayDiv
                  className="aws-icon-text"
                  appendingText=" (Websocket Api)"
                />
                <p>
                  The app utilizes a Websocket Api Gateway to handle Websocket
                  requests from the client for real time communication.
                </p>
              </div>
              <div>
                <SmallAWSDynamoDBDiv className="aws-icon-text" />
                <p>I use DynamoDB as the Database for Chatvious.</p>
              </div>
              <div>
                <SmallAWSCognitoDiv className="aws-icon-text" />
                <p>
                  The app utilizes Amazon Cognito User Pools to help with
                  sign-up, sign-in, and the authentication and authorization
                  processes.
                </p>
              </div>
              <div>
                <SmallCloudFrontDiv className="aws-icon-text" />
                <p>
                  The app utilizes Amazon CloudFront To serve the Static Content
                  that was made for this chatvious. Cloudfront also caches to
                  static content reducing request to the s3 bucket.
                </p>
              </div>
              <div>
                <SmallAWSS3Div className="aws-icon-text" />
                <p>
                  The app utilizes an Aws S3 bucket to store all the static
                  content which CloudFront uses.
                </p>
              </div>
              <div>
                <h5>Other</h5>
                <p>
                  The app also uses other resouces like Route 53 for the domain
                  and Amazon Certificate Manager for the tls certificates used
                  by the aws services.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-box">
                <p>
                  I also made an image so you can see how chatvious works
                  visually. I made this Image with a tool called{" "}
                  <span className="font-bold">Application Composer.</span> It's
                  a tool that helps a bit for design Aws Sam templates or
                  CloudFormation Templates and they had an option to export an
                  image.
                </p>
              </div>
              <div>
                <h4
                  id="chatvious-infrustructure-picture"
                  className="inner-title"
                >
                  Image of chatvious Infrustructure.
                </h4>
                <img
                  src={chatviousAwsInfrustructure}
                  alt="Image of chatvious Infrustructure"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
