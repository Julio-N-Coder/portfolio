import {
  SmallReactDiv,
  SmallTailwindDiv,
  SmallTypescriptDiv,
} from "../smallNamesWithIcons";

export default function GenericFrontEnd() {
  return (
    <div>
      <h3 className="main-tech-title">Front End</h3>
      <div className="flex flex-col gap-2">
        <SmallReactDiv />
        <SmallTailwindDiv />
        <SmallTypescriptDiv />
      </div>
    </div>
  );
}
