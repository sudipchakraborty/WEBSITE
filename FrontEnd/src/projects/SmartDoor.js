import React, { useState } from "react";
import "./SmartDoor.css";
import "../communication/esp32Service"
import { openDoor } from "../communication/esp32Service";

const DoorControl = () => {
  const [status, setStatus] = useState("Unknown");

  const handleDoorOpen = () => {
    setStatus("Door Opened");
    openDoor();
  };

  const handleDoorClose = () => {
    setStatus("Door Closed");
  };

  return (
    <div className="control-container">
      <h2>Smart Door Control</h2>
      <button className="btn open" onClick={handleDoorOpen}>Open Door</button>
      <button className="btn close" onClick={handleDoorClose}>Close Door</button>
      <p>Door Status: <strong>{status}</strong></p>
    </div>
  );
};

export default DoorControl;
