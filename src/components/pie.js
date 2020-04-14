import Chart from "react-apexcharts";
import React , { useEffect, useState} from 'react';
import {Row, Col} from 'antd';
import {PieChartOutlined} from '@ant-design/icons';

function PieChart() {
  const [labels, setLabel] = useState({});
  const [lseries, setlSeries] = useState([]);
  const [cseries, setcSeries] = useState([]);

  useEffect(() => {
    fetch("http://corona.camcann.com/api/likesncoms")
      .then(res => res.json())
      .then(
        (result) => {
          var key;
          const listlabel= [];
          const listlseries = [];
          const commentseries = [];
          for(key in result.like_timeline){
            listlabel.push(key+' Hour');
            listlseries.push(result.like_timeline[key]);
          }
          for(key in result.comment_timeline){
            commentseries.push(result.comment_timeline[key]);
          }
          setLabel({labels: listlabel});
          setlSeries(listlseries);
          setcSeries(commentseries);
        },
        (error) => {
        }
      )
  }, [])

    return (
      <div className="donut">
        <Row>
          <Col>
            <PieChartOutlined style={{fontSize: "30px"}}/></Col>
          <Col>
            <h2 align="center">Like Counts</h2>
            <Chart options={labels} series={lseries} type="pie" width="360" />
          </Col>          
          <Col>
            <h2 align="center">Comment Counts</h2>
            <Chart options={labels} series={cseries} type="pie" width="360" />
          </Col>
        </Row>
      </div>
    );
}

export default PieChart;
