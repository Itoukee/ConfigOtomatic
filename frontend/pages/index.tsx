import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import Components from "../components/Components";
import CompTable from "../components/CompTable";
import ConfigPeak from "../components/ConfigPeak";
import { ComponentService } from "../services/components.service";
import { ConfigService } from "../services/configs.service";
import { useAppSelector } from "../stores/config";
import { RootState } from "../stores/useStore";
import { IComponent, IType } from "../types/computerTypes";

const Home = ({ components }: { components: IComponent[] }) => {
  const config = useAppSelector((state: RootState) => state.config);
  const router = useRouter();

  return (
    <div className="w-screen h-screen overflow-hidden">
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
        {config.user ? (
          <>
            <div
              className="absolute right-5  flex  items-center space-x-3 bg-green-400 rounded px-4 py-2 text-gray-600 hover:bg-green-500 z-1 cursor-pointer "
              onClick={() => router.push("/auth")}
            >
              <ImCross />
              <p>Connected as {config.user.email}</p>
            </div>

            <div
              className="absolute  right-1/3 flex  items-center space-x-3 bg-green-400 rounded px-4 py-2 text-gray-600 hover:bg-green-500 z-1 cursor-pointer "
              onClick={() => router.push("/admin")}
            >
              Admin panel
            </div>
          </>
        ) : (
          <button
            className="absolute right-5 bg-green-400 rounded px-4 py-2 text-gray-600 hover:bg-green-500 z-1 "
            onClick={() => router.push("/auth")}
          >
            Login
          </button>
        )}
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
