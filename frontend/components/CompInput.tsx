import { IComponent, IType } from "../types/computerTypes";
import Image from "next/image";
import { useState } from "react";

type CompInputProps = {
  components: IComponent[];
  component?: IComponent;
  type: IType;
};

const CompInput = ({ components, component, type }: CompInputProps) => {
  const [activated, setActived] = useState<boolean>(false);
  return (
    <div
      className="border border-gray-500 flex flex-row space-x-2"
      onClick={() => setActived(!activated)}
    >
      {activated && <div className="absoulte top-0 bg-white ">Active</div>}
      {component ? (
        <Image src={component.image} alt="product-image" />
      ) : (
        <p className="ml-2 cursor-default">{type}</p>
      )}
    </div>
  );
};

export default CompInput;
