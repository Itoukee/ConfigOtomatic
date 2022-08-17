import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ConfigService } from "../../services/configs.service";
import { useAppSelector } from "../../stores/config";
import { IComponent, IConfig } from "../../types/computerTypes";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const Pc = () => {
  const router = useRouter();
  const { id } = router.query;
  const [config, setConfig] = useState<IConfig | null>();
  const [visible, setVisible] = useState<boolean>(false);
  const user = useAppSelector((state) => state.config.user);

  const getConfig = async () => {
    if (id) {
      const conf = await ConfigService.getOne(id as string);

      if (conf?.visibility || (user?._id === conf?.userId && conf)) {
        setConfig(conf);
        setVisible(conf.visibility);
      }
    }
  };

  const changeVisibility = async (value: boolean) => {
    const newValue: IConfig | undefined = await ConfigService.updateVisibility(
      value,
      config?._id || ""
    );
    if (newValue) setVisible(newValue.visibility);
  };

  const handleDelete = async () => {
    await ConfigService.deleteOne(id);
    router.push("/");
  };

  useEffect(() => {
    getConfig();
  }, [id, visible]);

  return (
    <div className="w-screen h-screen bg-slate-300 overflow-hidden ">
      {config ? (
        <div className="flex flex-col h-full text-center justify-center space-y-3 ">
          <h1 className="text-4xl mb-6">Ma configuration</h1>
          <h1>Nom : {config.name}</h1>
          <h2>Total : {config.price}€</h2>
          <div className="flex justify-center">
            <FormGroup>
              <FormControlLabel
                label={"Rendre public"}
                control={
                  <Switch
                    defaultChecked={visible}
                    onChange={() => changeVisibility(!visible)}
                  />
                }
              />
            </FormGroup>
          </div>
          <>
            {config.config.components.map((comp: IComponent, i) => (
              <div
                key={i}
                className="flex flex-row justify-center text-center space-x-3"
              >
                <p>{comp.brand}</p>
                <p>{comp.title}</p>
                <p>{comp.socket}</p>
                <p>{comp.price}€</p>
              </div>
            ))}
          </>
          <button
            className="bg-green-400 rounded p-2 "
            onClick={() => router.push("/")}
          >
            Retourner au configurateur
          </button>
          <button
            className="bg-red-400 rounded p-2 "
            onClick={() => handleDelete()}
          >
            Supprimer cette configuration
          </button>
        </div>
      ) : (
        <h1>Cette configuration n&apos;existe pas ou est en privé</h1>
      )}
    </div>
  );
};

export default Pc;
