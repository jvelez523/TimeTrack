import React, { Component } from 'react'
import Chart from 'chart.js';


export default class Overtime extends Component {
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
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      new Chart(myChartRef, {
          type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					backgroundColor: '#A93F55',
					borderColor: '#A93F55',
					data: [
						1,2,3,4,5
					],
					fill: false,
				}, {
					label: 'My Second dataset',
					fill: false,
					backgroundColor: '#A93F55',
					borderColor: '#A93F55',
					data: [
						3,6,7,8,1
					],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart.js Line Chart'
				},
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
