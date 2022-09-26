import React from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';

const PerformaceChart = ({chartData}) => {
  console.log("chartData:",chartData);
  const dataArray={};
  const dataset = ([unpaidInvoices,totalInvoices,paidInvoices]) => {
    dataArray['paidInvoices'] = paidInvoices.length;
    dataArray['unpaidInvoices'] = unpaidInvoices.length;
    dataArray['totalInvoices'] = totalInvoices.length;
    return dataArray;
  }
  dataset([...chartData[0]]);
  
  const data = {
    labels: ['Total Invoices', 'Paid Invoices', 'UnpaidInvoices'],
    datasets: [
      {
      label: 'Performance Statistics',
      data: [dataArray.totalInvoices,dataArray.paidInvoices,dataArray.unpaidInvoices],
      backgroundColor: [
      'rgb(34, 135, 227,0.5)',
      'rgb(8, 113, 73,0.5)',
      'rgb(183, 40, 33,0.5)'
      ],
      borderColor:[
      'rgb(34, 135, 227)',
      'rgb(8, 113, 73)',
      'rgb(183, 40, 33)'
      ],
      borderWidth: 2,
      barThickness: 100,
      borderRadius: 20
      }
    ]
  };

  const options={
    scales: {
      x: {
        ticks: {
          font: "'Quicksand', sans-serif",
          color:'#303233',
          maxTicksLimit: 3
        },
        grid: {
          display: false
        }
      },
    y:{
      ticks:{
        color:'#303233',
        stepSize: 2
      },
      grid: {
        display: true
      }
      ,
      min: 0,
      max: 10,
    }
    },
    responsive:true,
  }

  return (
    <Bar data={data} options={options}/>
  )
}

export default PerformaceChart
