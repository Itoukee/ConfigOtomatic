import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { ComponentService } from "../../services/components.service";
import { useAppSelector } from "../../stores/config";
import { RootState } from "../../stores/useStore";
import { IComponent } from "../../types/computerTypes";

const AdminPage = ({ components }: { components: IComponent[] }) => {
  const user = useAppSelector((state: RootState) => state.config.user);
  const router = useRouter();
  const [currentComp, setCurrentComp] = useState<IComponent[]>(components);
  const [newComponent, setNewComponent] = useState<object>({});

  const handleSubmitCreate = async () => {
    if (user) {
      const comp = await ComponentService.createOne(newComponent, user);
      setCurrentComp([...currentComp, comp]);
    }
  };
  const handleDelete = async (id: string) => {
    if (user && user.superAdmin) {
      await ComponentService.deleteOne(id, user);
      setCurrentComp([
        ...currentComp.filter((comp: IComponent) => comp._id !== id),
      ]);
    }
  };
  useEffect(() => {
    if (!user?.superAdmin) router.push("/");
  }, [currentComp]);

  return (
    <div className="w-screen h-screen flex flex-row overflow-hidden bg-black ">
      <div className="w-1/2 bg-slate-400 item-center justify-center">
        <div className="flex flex-col  space-y-2 m-10 text-center bg-orange-200 rounded p-2 ">
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
              setNewComponent({ ...newComponent, image: event.target.value })
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
      <div className="w-1/2 h-full flex flex-col flex-wrap bg-slate-400 m-10 rounded">
        <div className="bg-gray-300 text-center">
          <h1 className="text-4xl bg-blue-200 p-4">Edit or Delete</h1>
          {currentComp.map((comp, i) => (
            <div
              className="border flex flex-row justify-evenly items-center space-x-3 "
              key={i}
              onClick={() => console.log("here")}
            >
              <div onClick={() => handleDelete(comp._id)}>
                <ImCross />
              </div>
              <p>{comp.brand}</p>
              <p>{comp.title}</p>
              <p>{comp.socket}</p>
              <p>{comp.price}€</p>
              <p>{comp.rated} stars</p>
            </div>
          ))}
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

export default AdminPage;
