import Image from "next/image";
import { ImCross } from "react-icons/im";

import { ICaracteristic, IComponent, IType } from "../types/computerTypes";

import {
  showComponents,
  updateConfig,
  useAppDispatch,
  useAppSelector,
} from "../stores/config/config";
import { RootState } from "../stores/config/useConfig";

type CompInputProps = {
  components: IComponent[];
  type: IType;
};

const CompInput = ({ components, type }: CompInputProps) => {
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.config.initConfig.config);

  const component = useAppSelector(
    (state: RootState) =>
      state.config.initConfig.config?.components.filter(
        (comp: IComponent) => comp.type == type
      )[0] || undefined
  );

  const removeComponentByType = () => {
    if (config?.components) {
      let current = [...config.components];
      if (current.length === 1) {
        dispatch(updateConfig({ visibility: false }));
        return;
      }
      const index = current.findIndex((comp: IComponent) => comp.type === type);
      const price = current[index].price;

      current = current.filter(
        (element: IComponent) => current[index]._id !== element._id
      );

      dispatch(
        updateConfig({
          config: {
            components: current,
            price: config.price - price,
          },
        })
      );
    }
  };

  return (
    <div
      className="w-full border border-gray-500 bg-white flex flex-row space-x-2"
      onClick={() => dispatch(showComponents({ type: type, visible: true }))}
    >
      {component ? (
        <>
          <div className="m-2" onClick={() => removeComponentByType()}>
            <ImCross />
          </div>
          <div className="flex flex-row space-x-3 ">
            <Image
              src={component.image}
              alt="product-image"
              width={100}
              height={100}
            />
            <div className="flex flex-col">
              <div className="flex flex-row space-x-3">
                <h1>{component.brand}</h1>
                <h2>{component.title}</h2>
              </div>
              <div>
                {component.caracteristics.map(
                  (caracteristic: ICaracteristic, i) => (
                    <p className="text-gray-300 font-thin text-xs px-" key={i}>
                      {caracteristic.text.concat("...")}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="ml-2 cursor-default">{type}</p>
      )}
    </div>
  );
};

export default CompInput;
