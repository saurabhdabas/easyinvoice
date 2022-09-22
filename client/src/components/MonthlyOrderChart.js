import React,{useState} from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';

const chartData = [
  {
  id:1,
  year:2020,
  month:'Jan',
  Orders:2,
  amount:2000
  },
  {
    id:2,
    year:2021,
    month:'Feb',
    Orders:2,
    amount:3000
  },
  {
    id:3,
    year:2022,
    month:'Mar',
    Orders:2,
    amount:4000
  },
  {
    id:4,
    year:2023,
    month:'Apr',
    orders:2,
    amount:5000
  },
  {
    id:5,
    year:2023,
    month:'Jan',
    orders:2,
    amount:5000
  },
  {
    id:6,
    year:2023,
    month:'Jan',
    orders:2,
    amount:5000
  }
]
const MonthlyOrderChart = () => {
  // const [chartData, setChartData] = useState([]);

  const data = {
    labels: chartData.map((item) => `Order #${item.id}`),
    datasets: [
      {
        label: 'Amount Spent Per Order',
        data: chartData.map((item) => item.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(201, 203, 207, 0.5)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 2,
        barThickness: 70,
        borderRadius: 20,
      }
    ]
  }
  // let delayed;
  const options={
    scales: {
      x: {
        ticks: {
          color:'#303233',
          maxTicksLimit: 6
        },
        grid: {
          display: false
        },
        // title: {
        //   display: true,
        //   text: 'Order ID',
        //   color: '#000',
        //   font: {
        //     family: 'Quicksand',
        //     size: 15,
        //     weight: 'bold',
        //     lineHeight: 1.2,
        //   }
        // }
      },
    y:{
      ticks:{
        color:'#303233',
        stepSize: 2000
      },
      grid: {
        display: false
      },
      min: 0,
      max: 6000,
    }
    },
    responsive:true,
  }

  return (
    <Bar data={data} options={options}/>
  )
}

export default MonthlyOrderChart
