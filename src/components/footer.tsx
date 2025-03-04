import { GithubSvg, TwitterXSVG } from "./svgs";
import linkedinSVG from "../assets/linkedin-svg.svg";

export default function Footer() {
  return (
    <div className="p-2 border-t-2 border-base-content/50">
      <div className="flex items-center gap-2">
        <a href="https://github.com/Julio-N-Coder" target="_blank">
          <GithubSvg className="h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/julio-navarro-824983266"
          target="_blank"
        >
          <img
            src={linkedinSVG}
            className="w-16"
            alt="Tailwind SVG Image Link"
          />
        </a>
        <a href="https://twitter.com/Night_Coder_404" target="_blank">
          <TwitterXSVG className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}
