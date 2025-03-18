import React, { useState } from "react";
import "./SmartDoor.css";
import { openDoor, closeDoor } from "../communication/esp32Service";

const SmartDoor = () => {
  const [status, setStatus] = useState("Unknown");
  const [contractAddress, setContractAddress] = useState("");
  const [esp32Endpoint, setEsp32Endpoint] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [transactionLogs, setTransactionLogs] = useState([]);
  const [error, setError] = useState("Contract not initialized");

  const handleSaveConfig = () => {
    alert(`Config saved: Contract - ${contractAddress}, ESP32 - ${esp32Endpoint}`);
  };

  const handleWalletConnect = () => {
    // Simulate wallet connection
    setWalletConnected(true);
  };

  const handleDoorOpen = async () => {
    await openDoor();
    setStatus("Door Opened");
  };

  const handleDoorClose = async () => {
    await closeDoor();
    setStatus("Door Closed");
  };

  return (
    <div className="dashboard">
      <div className="config-section">
        <h3>Configuration</h3>
        <input
          type="text"
          placeholder="Contract Address"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="ESP32 Endpoint (http://your_ip:8080/command)"
          value={esp32Endpoint}
          onChange={(e) => setEsp32Endpoint(e.target.value)}
        />
        <button onClick={handleSaveConfig}>Save Configuration</button>
      </div>

      <div className="section">
        <h4>Wallet Connection</h4>
        <button onClick={handleWalletConnect} disabled={walletConnected}>
          {walletConnected ? "Wallet Connected" : "Connect Wallet"}
        </button>
        <p>{walletConnected ? "Connected" : "Not connected"}</p>
      </div>

      <div className="section">
        <h4>Transaction Logs</h4>
        {transactionLogs.length === 0 ? (
          <div className="error-message">Failed to load logs: {error}</div>
        ) : (
          <ul>
            {transactionLogs.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="section door-control">
        <h4>Door Control</h4>
        <div className="door-image">🚪</div>
        <p>Door Status: <strong>{status}</strong></p>
        <button className="open" onClick={handleDoorOpen}>Open Door</button>
        <button className="close" onClick={handleDoorClose}>Close Door</button>
      </div>
    </div>
  );
};

export default SmartDoor;