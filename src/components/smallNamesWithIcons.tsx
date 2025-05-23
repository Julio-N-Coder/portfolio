import { getTheme } from "../lib/utils";
import reactSVG from "../assets/react-svg.svg";
import tailwindSVG from "../assets/tailwind-svg.svg";
import nodejsSVG from "../assets/nodejs-icon-svg.svg";
import ejsSVG from "../assets/ejs-svg.svg";
import typescriptSVG from "../assets/typescript-svg.svg";
import awsSamSVG from "../assets/aws-svgs/aws-sam-svg.svg";
import awsCloudFrontSVG from "../assets/aws-svgs/aws-CloudFront.svg";
import awsS3SVG from "../assets/aws-svgs/aws-Simple-Storage-Service.svg";
import awsLambdaSVG from "../assets/aws-svgs/aws-Lambda.svg";
import awsApiGatewaySVG from "../assets/aws-svgs/aws-API-Gateway.svg";
import awsDynamoDBSVG from "../assets/aws-svgs/aws-DynamoDB.svg";
import awsCognitoSVG from "../assets/aws-svgs/aws-Cognito.svg";
import githubActionsSVG from "../assets/github-actions-svg.svg";
import javaSVG from "../assets/java-logo.svg";
import springBootSVG from "../assets/spring-boot.svg";

interface props {
  className?: string;
  appendingText?: string;
}

interface BaseProps extends props {
  svgImage: string;
  title: string;
  alt: string;
  svgClassName?: string;
}

function SmallSVGBaseDiv({
  className,
  appendingText,
  svgImage,
  title,
  alt,
  svgClassName,
}: BaseProps) {
  return (
    <div className={className ? className : "flex gap-2"}>
      <img
        src={svgImage}
        className={`w-8 ${svgClassName && svgClassName}`}
        alt={alt}
      />
      <p>
        {title}
        <span>{appendingText}</span>
      </p>
    </div>
  );
}

function SmallReactDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={reactSVG}
      title="React"
      alt="React SVG"
    />
  );
}

function SmallTailwindDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={tailwindSVG}
      title="Tailwind"
      alt="Tailwind SVG"
    />
  );
}

function SmallNodejsDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={nodejsSVG}
      title="Nodejs"
      alt="Nodejs SVG"
    />
  );
}

function SmallEjsDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={ejsSVG}
      title="EJS"
      alt="EJS SVG"
    />
  );
}

function SmallAWSDiv({ className, appendingText }: props) {
  return (
    <div className={className ? className : "flex gap-2"}>
      <svg
        className="w-8"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          className="awsSVGPaths"
          fill={getTheme() === "dark" ? "#fff" : "#252F3E"}
          d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.165-.315c-.415.491-.936.737-1.564.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.191-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.618.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.049-.214c0-.085.043-.133.128-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.1-.208a.365.365 0 01.214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.458.458 0 01.107-.208.346.346 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.76.76 0 01-.038.133l-1.283 4.127c-.032.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.378.378 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.46.46 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.427 2.427 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.436 1.436 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z"
        />

        <g fill="#F90" fillRule="evenodd" clipRule="evenodd">
          <path d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z" />

          <path d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z" />
        </g>
      </svg>
      <p>
        AWS<span>{appendingText}</span>
      </p>
    </div>
  );
}

function SmallAWSSamDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={awsSamSVG}
      title="AWS SAM"
      alt="AWS SAM SVG"
    />
  );
}

function SmallTypescriptDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={typescriptSVG}
      title="Typescript"
      alt="Typescript SVG"
    />
  );
}

function SmallCloudFrontDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={awsCloudFrontSVG}
      svgClassName="rounded-sm"
      title="CloudFront"
      alt="AWS CloudFront SVG"
    />
  );
}

function SmallAWSS3Div({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={awsS3SVG}
      svgClassName="rounded-sm"
      title="S3"
      alt="AWS S3 SVG"
    />
  );
}

function SmallAWSLambdaDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={awsLambdaSVG}
      svgClassName="rounded-sm"
      title="Lambda"
      alt="AWS Lambda SVG"
    />
  );
}

function SmallAWSApiGatewayDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={awsApiGatewaySVG}
      svgClassName="rounded-sm"
      title="API Gateway"
      alt="AWS API Gateway SVG"
    />
  );
}

function SmallAWSDynamoDBDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={awsDynamoDBSVG}
      svgClassName="rounded-sm"
      title="DynamoDB"
      alt="AWS DynamoDB SVG"
    />
  );
}

function SmallAWSCognitoDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={awsCognitoSVG}
      svgClassName="rounded-sm"
      title="Cognito"
      alt="AWS Cogntio SVG"
    />
  );
}

function SmallGithubActionsDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={githubActionsSVG}
      title="Github Actions"
      alt="Github Actions SVG"
    />
  );
}

function SmallJavaDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={javaSVG}
      title="Java"
      alt="Java SVG"
    />
  );
}

function SmallSpringBootDiv({ className, appendingText }: props) {
  return (
    <SmallSVGBaseDiv
      className={className}
      appendingText={appendingText}
      svgImage={springBootSVG}
      title="Spring Boot"
      alt="Spring Boot SVG"
    />
  );
}

export {
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
  SmallJavaDiv,
  SmallSpringBootDiv,
};
