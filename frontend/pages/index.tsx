import Components from "../components/Components";
import { ComponentService } from "../services/components.service";
import { IComponent } from "../types/computerTypes";

const Home = ({ components }: { components: IComponent[] }) => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="h-1/6 w-screen overflow-hidden flex flex-grow justify-center items-center bg-blue-300 space-x-2">
        <h1 className="text-2xl font-bold">Configaut&apos;omatic</h1>
        <h2>by Tropdachats</h2>
      </div>
      <div className="h-5/6 w-full flex flex-row justify-evenly mt-3">
        <div className="bg-red-300">
          <Components components={components} />
        </div>
        <div className="bg-red-300">Aperçu de ma config</div>
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
