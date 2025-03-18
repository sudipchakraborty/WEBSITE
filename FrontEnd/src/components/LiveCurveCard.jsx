import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./LiveCurveCard.css";

// Register required Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const LiveCurveCard = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [labels, setLabels] = useState([]);

  // Function to simulate live data fetching
  const fetchLiveData = () => {
    const newPoint = Math.random() * 100; // Random data point
    const currentTime = new Date().toLocaleTimeString(); // Current time as label

    // Update state with new data
    setDataPoints((prevData) => [...prevData, newPoint].slice(-10)); // Keep the last 10 points
    setLabels((prevLabels) => [...prevLabels, currentTime].slice(-10)); // Keep the last 10 labels
  };

  // Fetch live data every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchLiveData();
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Chart.js data configuration
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Live Data",
        data: dataPoints,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4, // Line tension for smoothing
        fill: false, // Disable fill under the line
      },
    ],
  };

  return (
    <div className="live-curve-card">
      <h3 className="card-title">Live Data Curve</h3>
      <div className="chart-container">
        <Line data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default LiveCurveCard;
