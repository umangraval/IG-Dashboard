import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function Line() {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("http://corona.camcann.com/api/followtimeline")
      .then(res => res.json())
      .then(
        (result) => {
          var categories = [];
          var data = [];
          var key;
          for(key = 0;key < result.Followtimeline.length;key++){
            categories.push(Object.keys(result.Followtimeline[key])[0]);
            data.push(Object.values(result.Followtimeline[key])[0]);          }
          setOptions({chart: {
            id: "basic-bar"
          },
          xaxis: { categories }});
          setSeries([{name: "series-1",data}])
        },
        (error) => {
        }
      )
  }, [])

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <h2>Follower timeline</h2>
            <Chart
              options={options}
              series={series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
}

export default Line;