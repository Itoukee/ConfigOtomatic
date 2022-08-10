import { IComponent, IType } from "../types/computerTypes";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { showComponents } from "../stores/config/config";

type CompInputProps = {
  components: IComponent[];
  component?: IComponent;
  type: IType;
};

const CompInput = ({ components, component, type }: CompInputProps) => {
  const dispatch = useDispatch();
  return (
    <div
      className="border border-gray-500 flex flex-row space-x-2"
      onClick={() => dispatch(showComponents({ type: type, visible: true }))}
    >
      {component ? (
        <Image src={component.image} alt="product-image" />
      ) : (
        <p className="ml-2 cursor-default">{type}</p>
      )}
    </div>
  );
};

export default CompInput;
