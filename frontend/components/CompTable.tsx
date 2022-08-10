import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showComponents } from "../stores/config/config";
import { RootState } from "../stores/config/useConfig";
import { IComponent } from "../types/computerTypes";

const CompTable = ({
  components,
  type,
}: {
  components: IComponent[];
  type: string;
}) => {
  const config = useSelector((state: RootState) => state.config);
  const dispatch = useDispatch();
  return (
    <div className="absolute  w-3/5 right-0 h-full bg-slate-400 ">
      <div
        className="cursor-pointer"
        onClick={() => dispatch(showComponents({ visible: false }))}
      >
        <p>EXIT</p>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-center font-bold text-4xl">{type}</h1>
        <div className="flex flex-row items-center justify-around">
          <h2 className="text-2xl">
            Total de la config : {config.initConfig.price || 0} €
          </h2>
          <h2 className="text-2xl">{components.length} produits compatibles</h2>
        </div>
      </div>
      <table className="flex flex-col mx-5 space-y-3">
        {components.map((comp, i) => (
          <td
            className="border flex flex-row justify-evenly items-center "
            key={i}
          >
            <p>{comp.brand}</p>
            <p>{comp.title}</p>
            <p>{comp.socket}</p>
            <p>{comp.price}€</p>
            <p>{comp.rated} stars</p>
          </td>
        ))}
        <th className="flex flex-row"></th>
      </table>
    </div>
  );
};

export default CompTable;
