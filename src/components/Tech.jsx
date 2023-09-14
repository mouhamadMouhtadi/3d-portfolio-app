import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constansts";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((tecnology) => (
        <div className="h-28 w-28 " key={tecnology.name}>
          <BallCanvas icon={tecnology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
