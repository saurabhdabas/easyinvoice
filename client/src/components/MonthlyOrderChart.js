import React,{useState} from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';

const MonthlyOrderChart = ({chart}) => {

  const data = {
    labels: chart.map((item) => `Order Id ${item.order_id}`),
    datasets: [
      {
        label: 'Amount Spent Per Order',
        data: chart.map((item) => item.order_amount),
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
        barThickness: 60,
        borderRadius: 20,
      }
    ]
  }

  const options={
    scales: {
      x: {
        ticks: {
          color:'#303233',
          maxTicksLimit: 6
        },
        grid: {
          display: false
        }
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
    plugins: {
      title: {
          display: true,
          text: 'Display Last Six Orders',
          padding: {
              top: 10,
              bottom: 30
          },
          font:{
            family:'quicksand',
            size:14
          }
      }
    }
  }

  return (
    <Bar data={data} options={options}/>
  )
}

export default MonthlyOrderChart
