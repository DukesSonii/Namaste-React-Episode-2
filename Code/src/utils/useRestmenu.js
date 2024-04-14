import React from "react";
import { MENU_API } from "./constants";

const useRestmenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + id);
    const json = data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestmenu;
