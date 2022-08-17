import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ComponentService } from "../../services/components.service";
import { useAppSelector } from "../../stores/config";
import { RootState } from "../../stores/useStore";
import { IComponent } from "../../types/computerTypes";

const AdminPage = ({ components }: { components: IComponent[] }) => {
  const user = useAppSelector((state: RootState) => state.config.user);
  const router = useRouter();
  const [currentComp, setCurrentComp] = useState<IComponent[]>(components);

  useEffect(() => {}, [currentComp]);

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-full bg-slate-400 item-center justify-center">
        <div className="flex flex-col w-1/3 space-y-2 ">
          <h1>Add a component</h1>
          <input type={"text"} placeholder={"type*"} />
          <input type={"text"} placeholder={"title*"} />
          <input type={"text"} placeholder={"brand*"} />
          <input type={"text"} placeholder={"image URL*"} />
          <input type={"number"} placeholder={"rated*"} />
          <input type={"number"} placeholder={"stock*"} />
          <input type={"number"} placeholder={"price*"} />
          <input type={"number"} placeholder={"rated*"} />
          <input type={"text"} placeholder={"socket"} />
        </div>
      </div>
      <div className="w-full flex flex-row bg-slate-400">
        <h1>Edit or Delete</h1>
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

export default AdminPage;
