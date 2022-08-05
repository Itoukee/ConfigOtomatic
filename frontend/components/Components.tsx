import { ComponentService } from "../services/components.service";
import { IComponent } from "../types/computerTypes";
import CompInput from "./CompInput";

const Components = ({ components }: { components: IComponent[] }) => {
  return (
    <div>
      <h1>Les composants</h1>
      <div className="flex flex-col space-y-5">
        <CompInput
          type="CPU"
          components={components.filter((component) => component.type == "CPU")}
        />
        <CompInput
          type="MB"
          components={components.filter((component) => component.type == "MB")}
        />
        <CompInput
          type="COOLER"
          components={components.filter(
            (component) => component.type == "COOLER"
          )}
        />
        <CompInput
          type="GPU"
          components={components.filter((component) => component.type == "GPU")}
        />
        <CompInput
          type="SSD"
          components={components.filter((component) => component.type == "SSD")}
        />
        <CompInput
          type="HDD"
          components={components.filter((component) => component.type == "HDD")}
        />
        <CompInput
          type="PSU"
          components={components.filter((component) => component.type == "PSU")}
        />
      </div>
    </div>
  );
};

export default Components;
