import { useRouter } from "next/router";
import { useState } from "react";
import { UserService } from "../../services/users.service";
import {
  useAppDispatch,
  useAppSelector,
  useSession,
} from "../../stores/config";
import { RootState } from "../../stores/useStore";

const Auth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state: RootState) => state.config.user);

  const [state, setState] = useState<"login" | "register">("login");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({
    email: "",
    password: "",
    verify: "",
  });

  const handleSubmitLogin = async () => {
    if (login.email && login.password != "") {
      const newUser = await UserService.login(login.email, login.password);
      if (newUser) {
        dispatch(useSession(newUser));
        router.push("/");
      }
    }
  };
  return (
    <div className="w-screen h-screen flex flex-row bg-gray-400">
      <div className="bg-black h-full w-full flex flex-col flex-wrap justify-center text-center space-y-4 ">
        <h1 className="w-full h-1/2 text-white font-semibold text-5xl mt-12">
          Connecte-toi pour enregistrer tes configurations !
        </h1>
      </div>
      <div className="bg-blue-800 w-full h-full flex justify-center items-center">
        {state === "login" ? (
          <div className="flex flex-col bg-slate-300 h-4/5 mt-12 rounded w-2/5 space-y-5">
            <h2 className="font-bold text-4xl text-center mt-6 ">Connection</h2>

            <div className="flex flex-col justify-center text-center h-1/4 w-full px-12 space-y-5">
              <input
                className="rounded"
                type={"text"}
                placeholder={"Email"}
                onChange={(event) =>
                  setLogin({ ...login, email: event.target.value })
                }
              ></input>

              <input
                className="rounded"
                type={"text"}
                placeholder={"Mot de passe"}
                onChange={(event) =>
                  setLogin({ ...login, password: event.target.value })
                }
              ></input>
              <button
                className="bg-green-400 rounded"
                onClick={() => handleSubmitLogin()}
              >
                Valider
              </button>
            </div>
            <p
              className="text-blue text-center cursor-pointer"
              onClick={() => setState("register")}
            >
              <u> Je n&apos;ai pas de compte </u>
            </p>
          </div>
        ) : (
          <div className="flex flex-col bg-slate-300 h-4/5 mt-12 rounded w-2/5 space-y-3">
            <h2 className="font-bold text-4xl text-center mt-6 ">
              Crée ton compte
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default Auth;
