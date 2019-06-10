import React, { Component } from 'react'
import Chart from 'chart.js';



export default class Revcirclechart extends Component {
  chartRef = React.createRef();

  data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"] ,
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
    
  componentDidMount() {
      const myChartRef = this.chartRef.current.getContext("2d");
      
      new Chart(myChartRef, {
          type: "doughnut",
          data: this.data,
          options: {
              //Customize chart options
          }
      });
  }
  render() {
      return (
          <div >
              <canvas
                  id="myChart"
                  ref={this.chartRef}
              />
          </div>
      )
  }
}
