import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import {LineChartOutlined} from '@ant-design/icons';
import {Row, Col} from 'antd';

function Line(username) {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("http://corona.camcann.com/api/"+username.username+"/followtimeline")
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
  }, [username.username])

    return (
      <div className="line">
      <Row>
        <Col span={6}>
          <LineChartOutlined style={{fontSize: "30px"}}/>
        </Col>
        <Col span={12}>
          <h2 align="center">Follower timeline</h2>
        </Col>
      </Row>
      <Row>
        <Chart
          options={options}
          series={series}
          type="line"
          width="500"
            />
      </Row>        
      </div>
    );
}

export default Line;