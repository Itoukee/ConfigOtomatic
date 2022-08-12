import { ICaracteristic, IComponent, IType } from "../types/computerTypes";
import Image from "next/image";
import {
  showComponents,
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
  const component = useAppSelector(
    (state: RootState) =>
      state.config.initConfig.config?.components.filter(
        (comp: IComponent) => comp.type == type
      )[0] || undefined
  );

  return (
    <div
      className="w-full border border-gray-500 bg-white flex flex-row space-x-2"
      onClick={() => dispatch(showComponents({ type: type, visible: true }))}
    >
      {component ? (
        <div className="flex flex-row space-x-3">
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
            <p>
              {component.caracteristics.map(
                (caracteristic: ICaracteristic, i) => (
                  <p className="text-gray-300 font-thin text-xs px-" key={i}>
                    {caracteristic.text}
                  </p>
                )
              )}
            </p>
          </div>
        </div>
      ) : (
        <p className="ml-2 cursor-default">{type}</p>
      )}
    </div>
  );
};

export default CompInput;
