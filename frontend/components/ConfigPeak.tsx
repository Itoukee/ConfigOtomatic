import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ConfigService } from "../services/configs.service";
import { useAppSelector } from "../stores/config";
import { RootState } from "../stores/useStore";
import { IComponent, IConfig } from "../types/computerTypes";

const ConfigPeak = () => {
  const config = useAppSelector(
    (state: RootState) => state.config.initConfig.config
  );
  const user = useAppSelector((state: RootState) => state.config.user);
  const router = useRouter();

  const [rename, setRename] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [configList, setConfigList] = useState<IConfig[]>([]);

  const handleSubmit = async () => {
    if (config && user) {
      await ConfigService.createOne([...config?.components], user._id, name);
    }
    setRename(false);
  };

  const getConfigs = async () => {
    if (user) {
      const temp = await ConfigService.getAll(user._id);
      if (temp) {
        setConfigList(temp);
      }
    }
  };

  useEffect(() => {
    getConfigs();
  }, []);

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
      {config && user && !rename && (
        <button
          className="bg-green-400 rounded text-gray-700"
          onClick={() => setRename(true)}
        >
          Sauvegarder cette configuration
        </button>
      )}
      {rename && (
        <div className="flex flex-row h-full justify-center bg-black shadow space-x-5">
          <p className="text-white">Donne lui un nom ! </p>
          <input
            className="bg-gray-700 text-green-400 rounded"
            type={"text"}
            placeholder={"Ma config"}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <button
            className="bg-green-400 rounded text-gray-700 px-5"
            onClick={() => handleSubmit()}
          >
            Sauvegarder
          </button>
        </div>
      )}
      <div>
        {configList.map((item, i) => (
          <p
            key={i}
            className="text-center"
            onClick={() => router.push(`/config/${item._id}`)}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ConfigPeak;
