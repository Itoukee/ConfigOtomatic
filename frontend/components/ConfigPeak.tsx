import { useAppSelector } from "../stores/config/config";
import { RootState } from "../stores/config/useConfig";
import { IComponent } from "../types/computerTypes";

const ConfigPeak = () => {
  const config = useAppSelector(
    (state: RootState) => state.config.initConfig.config
  );

  return (
    <div className="flex flex-col space-y-3 px-5">
      <h1 className="self-center">Aperçu de ma config</h1>
      <div className="w-11/12 border self-center border-black"></div>
      {config?.components &&
        config.components.map((component: IComponent, i) => (
          <div
            key={i}
            className="flex flex-row  space-x-2  justify-start items-center"
          >
            {component.stock > 0 ? (
              <div className="h-5 w-5 rounded-xl bg-green-500"></div>
            ) : (
              <div className="h-5 w-5 rounded-xl bg-red-500"></div>
            )}
            <p>{component.brand}</p>
            <p>{component.title}</p>

            <p className="justify-self-end text-red-500">{component.price}€</p>
          </div>
        ))}
      {config?.components && config.components.length > 0 && (
        <div className="w-11/12 border self-center border-black"></div>
      )}
      <div className="self-center flex flex-row space-x-2">
        <h2>Total : </h2>
        <h1 className="text-red-500">{config?.price || 0}€</h1>
      </div>
    </div>
  );
};

export default ConfigPeak;
