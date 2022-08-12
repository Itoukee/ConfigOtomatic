import { ComponentService } from "../services/components.service";
import { useAppSelector } from "../stores/config/config";
import { RootState } from "../stores/config/useConfig";
import { IComponent } from "../types/computerTypes";
import CompInput from "./CompInput";

const Components = ({ components }: { components: IComponent[] }) => {
  const config = useAppSelector(
    (state: RootState) => state.config.initConfig.config
  );
  return (
    <div>
      <div className="flex flex-col space-y-5 w-full px-5">
        <h1>Les composants</h1>
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
