import "./ChartView.js"
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';

const ChartView = () => {
    Chart.register(CategoryScale)
    // const dataPoints = [];
     const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
        datasets: [
          {
            fill: true,
            lineTension: 0.0000001,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            // borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            // pointBorderWidth: 1,
            // pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1500000, 3900000, 3000000, 4100000, 2300000, 1800000, 2000000],
          }
        ]
}
const options = {
    title: {
        // display: false,
        // text: "My Trade Line Chart"
    },
    scales: {
        yAxes: [{
            ticks:{
                min: 0,
                max: 8,
                stepSize: 1
            }
        }]
    }
} 
return <Line data={data} options={options}/>;
};

export default ChartView;