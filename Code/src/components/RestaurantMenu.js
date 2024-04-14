import React, { useState, useEffect } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  //restaurant ki id change krne ke liye
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + id);

      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) return <ShimmerMenu />;

  // const { name  } = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemcards } = {
    itemcards:
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards,
  };
  console.log(itemcards);

  return (
    <div style={{ marginLeft: "40px" }}>
      <h2>{name}</h2>
      <span style={{ fontSize: "15.5px" }}>
        Cuisine: {cuisines.join(", ")} - {costForTwoMessage}
      </span>
      <br />
      <br />
      {/* <h1>{cuisine}</h1>
      <h1>{costfortwo}</h1> */}
      <ul>
        {itemcards?.map((x) => {
          return (
            <li
              key={x.card.info.name}
              style={{ fontSize: "15px", listStyle: "outside" }}
            >
              {x.card.info.name} - Rs.
              {x.card.info.price / 100 || x.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

// import react from "react";
// import { useState, useEffect } from "react";

// const RestaurantMenu = () => {
//   const [isdata, setisdata] = useState(null);

//   useEffect(() => {
//     fetchmenu();
//   }, []);

//   const fetchmenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2692&lng=73.009&restaurantId=86311&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
//     );
//     const json = await data.json();
//     console.log(json);
//     setisdata(json);
//   };
//   const { name, cuisines } = isdata?.data?.cards[2]?.card?.card?.info || {};

//   const { itemcards } =
//     isdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//       ?.card || {};

//   console.log(itemcards);

//   return (
//     <>
//       <h1>{name}</h1>
//       <h2>{cuisines?.join(", ")}</h2>
//       <ul>
//         {isdata?.map((X) => {
//           <li>{itemcards.card.info.name}</li>;
//         })}
//       </ul>
//     </>
//   );
// };

// export default RestaurantMenu;
