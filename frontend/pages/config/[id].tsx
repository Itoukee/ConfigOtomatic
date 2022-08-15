import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ConfigService } from "../../services/configs.service";
import { IConfig } from "../../types/computerTypes";

const Pc = () => {
  const router = useRouter();
  const { id } = router.query;
  const [config, setConfig] = useState<IConfig | null>();

  const getConfig = async () => {
    if (id) {
      const conf = await ConfigService.getOne(id as string);
      setConfig(conf);
    }
  };

  useEffect(() => {
    getConfig();
  }, [id]);

  return (
    <div className="w-screen h-screen bg-slate-300 ">
      {config ? (
        <div className="flex flex-col h-full text-center justify-center">
          <h1>{config.name}</h1>
          <h2>{config.price}</h2>
        </div>
      ) : (
        <h1>Cette configuration n&apos;existe pas !</h1>
      )}
    </div>
  );
};

export default Pc;
