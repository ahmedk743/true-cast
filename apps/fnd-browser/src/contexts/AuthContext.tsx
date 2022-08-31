import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

export const myContext = createContext<any>({});

export function useAuth() {
  return useContext(myContext);
}

export default function Context(props: PropsWithChildren<any>) {
  const [user, setUser] = useState<any>();
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);

  useEffect(() => {
    setGlobalLoading(true);
    axios
      .get("http://localhost:4000/api/user", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);

        setGlobalLoading(false);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        user,
      }}
    >
      {!globalLoading && props.children}
    </myContext.Provider>
  );
}
