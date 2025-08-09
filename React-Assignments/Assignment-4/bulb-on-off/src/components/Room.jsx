import { useState } from "react";

export default function Room({ title }) {
  const [isOn, setIsOn] = useState(false);
  const toggleLight = () => setIsOn(!isOn);

  return (
    <div className={`room ${isOn ? "light" : "dark"}`}>
      <h1>{title}</h1>
      <img
        className="bulb-img"
        src={isOn ? "/Bulb_on.png" : "/Bulb_off.png"}
        alt={isOn ? "Bulb is On" : "Bulb is Off"}
      />
      <button className="toggle-button" onClick={toggleLight}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}
