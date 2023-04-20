
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const MyVisual3Chart = () => {
  const [carbonData, setCarbonData] = useState([]);
  const [gastData, setGastData] = useState([]);
  const [humanData, setHumanData] = useState([]);
  const [showHumanActions, setShowHumanActions] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/carbon")
      .then(response => response.json())
      .then(result => {
        setCarbonData(result);
      })
      .catch(error => console.log(error));

    fetch("http://localhost:8080/gast")
      .then(response => response.json())
      .then(result => {
        setGastData(result);
      })
      .catch(error => console.log(error));

    fetch("http://localhost:8080/humanactivities")
      .then(response => response.json())
      .then(result => {
        setHumanData(result);
      })
      .catch(error => console.log(error));
  }, []);

  const getCombinedDataForChart = () => {
    const data = {
      labels: gastData.map(item => item.time),
      datasets: [
        {
          label: "Carbon data",
          yAxisID: "co2",
          data: carbonData.map(item => item.carbondioxide),
          borderColor: "#FF4136",
          backgroundColor: "rgba(255, 65, 54, 0.2)",
          fill: false,
          pointRadius: 0,
          pointHoverRadius: 0,
          pointHitRadius: 0,
          pointBorderWidth: 0,
        },
      
        {
          label: "Global data",
          yAxisID: "temp",
          data: gastData.map(item => item.fifty),
          borderColor: "#0074D9",
          backgroundColor: "rgba(0, 116, 217, 0.2)",
          fill: false,
          pointRadius: 0,
          pointHoverRadius: 0,
          pointHitRadius: 0,
          pointBorderWidth: 0,
        },
      ],
    };
    return data;
  };
    const options = {
      plugins: {
      legend: {
      position: "top",
      },
      title: {
      display: true,
      text: "Evolution of global temperature over the past two million years",
      font: {
      size: 20,
      weight: "bold",
      },
      },
      },
      scales: {
      y:{
        beginAtZero: true,
        type:"linear",
        position:"left",
        ticks:{
          display: false
        }
      },
      temp:{
        beginAtZero: true,
        type:"linear",
        position:"right"
      },
      x:{
          reverse: true,
      }
      },
      };
      
      return (
      <>
      <div className="chart-container">
      <Line data={getCombinedDataForChart()} options={options} />
      <div style={{ marginTop: "20px" }}>
      <button onClick={() => setShowHumanActions(!showHumanActions)}>
      {showHumanActions ? "Hide" : "Show"} human actions
      </button>
      <div><h4>Here is a line chart about global temperature and CO2 measurements from over 2 million years. There are also some human events that are connected to eather of those things and you can view them by pressing the button above.Below is a link to the source of the info in this chart.</h4>
      <h4>https://moodle.oulu.fi/pluginfile.php/1617782/course/section/235812/Climate%20Data%20Sources.pdf</h4></div>
      </div>
      </div >
      {showHumanActions && (
      <div style={{ marginTop: "20px", width: "800px", height: "600px", overflow: "auto" }}>
      <h3>Human Actions</h3>
      <ul>
      {humanData.map((item, index) => (
      <li key={index}>{item.event}</li>
      ))}
      </ul>
      </div>
      
      )}
      </>
      );
      };
      
      export default MyVisual3Chart;