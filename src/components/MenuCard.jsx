import React from "react";
import { useState , useEffect} from "react";

const MenuCard = () => {
    const [menu, setMenu] = useState("");
    
    const getData = async () => {
    //   console.log("calling getData");
    //   const response = await fetch("http://localhost:5000/menu");
    //   const dataFromServer = await response.json(); // dataFromServer --> "Shan Khout Swel"
      setMenu("Shan Khout Swel"); 
    };
    
    useEffect(() => {
      console.log("inside useEffect"); // useEffect render after inital render
      getData();
    }, []); // [] ---> only call firstTime
    // in dependecies you can also put like "menu" when menu state change it will call "getData"

    
  
  
    console.log("about to render");
    if (!menu) return null;
  
    return (
        <p>{menu}</p>
    );
  };

export default MenuCard
