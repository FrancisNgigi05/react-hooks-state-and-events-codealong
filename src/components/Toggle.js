import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <button onClick={handleClick} style={{backgroundColor: color}}>{isOn ? "ON" : "OFF"}</button>
  );
}

export default Toggle;