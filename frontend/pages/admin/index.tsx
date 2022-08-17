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
  const [newComponent, setNewComponent] = useState<object>({});

  useEffect(() => {}, [currentComp]);

  const handleSubmitCreate = async () => {
    if (user) await ComponentService.createOne(newComponent, user);
  };

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-full bg-slate-400 item-center justify-center">
        <div className="flex flex-col w-1/3 space-y-2 m-10 text-center bg-orange-200 rounded p-2 ">
          <h1 className="text-2xl">Add a component</h1>
          <input
            type={"text"}
            placeholder={"type*"}
            onChange={(event) =>
              setNewComponent({ ...newComponent, type: event.target.value })
            }
          />
          <input
            type={"text"}
            placeholder={"title*"}
            onChange={(event) =>
              setNewComponent({ ...newComponent, title: event.target.value })
            }
          />
          <input
            type={"text"}
            placeholder={"brand*"}
            onChange={(event) =>
              setNewComponent({ ...newComponent, brand: event.target.value })
            }
          />
          <input
            type={"text"}
            placeholder={"image URL*"}
            onChange={(event) =>
              setNewComponent({ ...newComponent, url: event.target.value })
            }
          />
          <input
            type={"number"}
            placeholder={"rated*"}
            onChange={(event) =>
              setNewComponent({ ...newComponent, rated: event.target.value })
            }
          />
          <input
            type={"number"}
            placeholder={"stock*"}
            onChange={(event) =>
              setNewComponent({ ...newComponent, stock: event.target.value })
            }
          />
          <input
            type={"number"}
            placeholder={"price*"}
            onChange={(event) =>
              setNewComponent({ ...newComponent, price: event.target.value })
            }
          />
          <input
            type={"text"}
            placeholder={"socket"}
            onChange={(event) =>
              setNewComponent({ ...newComponent, socket: event.target.value })
            }
          />
          <button
            className="border border-black rounded"
            onClick={() => handleSubmitCreate()}
          >
            Submit
          </button>
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
