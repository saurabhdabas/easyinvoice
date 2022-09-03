import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1 classname='dashboard__title'>Your Dashboard</h1>
      <div className='dashboard__tables'>
        <div className='dashboard__table-wrapper'>
          <h2>Performance</h2>
          <table className='dashboard__performance'>
            <tr>
              <th></th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
            </tr>
            <tr>
              <td><h3>Billed</h3></td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td><h3>Received</h3></td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td><h3>Expenses</h3></td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </table>
        </div>
        <div className='dashboard__table-wrapper'>
          <h2>Recent Invoices</h2>
          <table className='dashboard__invoices'>
            <tr>
              <th>#</th>
              <th>Client</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total (CAD)</th>
            </tr>
            <tr>
              <td><h3>92356</h3></td>
              <td>
                <span className='dashboard__invoice-number'>
                  <div>10589</div>
                  <Link to='/invoices:id'>
                    <img src='./link.png' alt='link-icon' width='15' height='15'/>
                  </Link>
                </span>
              </td>
              <td>Aug 10,2021</td>
              <td><h5 className='pending'>Pending</h5></td>
              <td>$1000.00</td>
            </tr>
            <tr>
              <td><h3>92356</h3></td>
              <td>
                <span className='dashboard__invoice-number'>
                  <div>10189</div>
                  <Link to='/invoices:id'>
                    <img src='./link.png' alt='link-icon' width='15' height='15'/>
                  </Link>
                </span>
              </td>
              <td>Aug 10,2021</td>
              <td><h5 className='paid'>Paid</h5></td>
              <td>$2000.00</td>
            </tr>
            <tr>
              <td><h3>92356</h3></td>
              <td>
                <span className='dashboard__invoice-number'>
                  <div>10089</div>
                  <Link to='/invoices:id'>
                    <img src='./link.png' alt='link-icon' width='15' height='15'/>
                  </Link>
                </span>
              </td>
              <td>Jul 10,2021</td>
              <td><h5 className='paid'>Paid</h5></td>
              <td>$4000.00</td>
            </tr>
          </table>
        </div> 
      </div>
      <h2 className='dashboard__message'>You have 20 Unpaid Invoices</h2>
      <div className='dashboard__table-wrapper'>
          <h2>Recent Invoices</h2>
          <table className='dashboard__unpaid-invoices'>
            <tr>
              <th>#</th>
              <th>Client Name</th>
              <th>Date</th>
              <th>Total (CAD)</th>
              <th>Overdue</th>
              <th>Outstanding</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td><h3>92356</h3></td>
              <td>Jane Thomas</td>
              <td>Aug 10,2021</td>
              <td>$1000.00</td>
              <td>30 days</td>
              <td>$300.00</td>
              <td><button type='submit'>Send Reminder</button></td>
            </tr>
            <tr>
              <td><h3>92356</h3></td>
              <td>Jane Thomas</td>
              <td>Aug 10,2021</td>
              <td>$1000.00</td>
              <td>30 days</td>
              <td>$200.00</td>
              <td><button type='submit'>Send Reminder</button></td>
            </tr>
            <tr>
              <td><h3>92356</h3></td>
              <td>Jane Thomas</td>
              <td>Aug 10,2021</td>
              <td>$1000.00</td>
              <td>30 days</td>
              <td>$500.00</td>
              <td><button type='submit'>Send Reminder</button></td>
            </tr>
          </table>
        </div> 
    </div>
  )
}

export default Dashboard
