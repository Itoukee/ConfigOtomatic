import Components from "../components/Components";
import CompTable from "../components/CompTable";
import ConfigPeak from "../components/ConfigPeak";
import { ComponentService } from "../services/components.service";
import { useAppSelector } from "../stores/config/config";
import { RootState } from "../stores/config/useConfig";
import { IComponent, IType } from "../types/computerTypes";

const Home = ({ components }: { components: IComponent[] }) => {
  const config = useAppSelector((state: RootState) => state.config);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {config.visible && (
        <CompTable
          components={components.filter(
            (comp: IComponent) => comp.type == config.type
          )}
          type={config.type}
        />
      )}
      <div className="h-1/6 w-screen overflow-hidden flex flex-grow justify-center items-center bg-blue-300 space-x-2">
        <h1 className="text-2xl font-bold">Configaut&apos;omatic</h1>
        <h2>by Tropdachats</h2>
      </div>
      <div className="h-5/6 w-full flex flex-row justify-evenly mt-3">
        <div className="bg-red-300 w-1/2">
          <Components components={components} />
        </div>
        <div className="bg-gray-300 w-1/3">
          <ConfigPeak />
        </div>
      </div>
    </div>
  );
};
export const getStaticProps = async () => {
  const components = await ComponentService.getAll();
  return {
    props: {
      components,
    },
  };
};

export default Home;
