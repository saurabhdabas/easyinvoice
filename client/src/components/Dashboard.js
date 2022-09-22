import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillLayout,AiOutlineLink, AiFillFund, AiFillSnippets, AiFillWarning } from "react-icons/ai";
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__title'>
        <h1>Your Dashboard</h1>
        <AiFillLayout size={30}/>
      </div>
      <div className='dashboard__tables'>
        <div className='dashboard__table-wrapper'>
          <div className='dashboard__table-title'>
            <h2>Performance</h2>
            <AiFillFund size={30}/> 
          </div>
          <table className='dashboard__performance'>
            <thead>
              <tr>
                <th></th>
                <th>Jul</th>
                <th>Aug</th>
                <th>Sep</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
        <div className='dashboard__table-wrapper'>
          <div className='dashboard__table-title'>
            <h2>Recent Invoices</h2>
            <AiFillSnippets size={30}/>
          </div>
          <table className='dashboard__invoices'>
            <thead>
              <tr>
                <th>#</th>
                <th>Client</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total (CAD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><h3>92356</h3></td>
                <td>
                  <span className='dashboard__invoice-number'>
                    <div>10589</div>
                    <Link to='/invoices:id'>
                      <AiOutlineLink color={'#2287E3'} size={20}/>
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
                      <AiOutlineLink color={'#2287E3'} size={20}/>
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
                      <AiOutlineLink color={'#2287E3'} size={20}/>
                    </Link>
                  </span>
                </td>
                <td>Jul 10,2021</td>
                <td><h5 className='paid'>Paid</h5></td>
                <td>$4000.00</td>
              </tr>
            </tbody>
          </table>
        </div> 
      </div>
      <h2 className='dashboard__message'>You have 20 Unpaid Invoices</h2>
      <div className='dashboard__table-wrapper'>
        <div className='dashboard__table-title'>
          <h2>Unpaid Invoices</h2>
          <AiFillWarning size={30}/>
        </div>
          <table className='dashboard__unpaid-invoices'>
            <thead>
              <tr>
                <th>#</th>
                <th>Client Name</th>
                <th>Date</th>
                <th>Total (CAD)</th>
                <th>Overdue</th>
                <th>Outstanding</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div> 
    </div>
  )
}

export default Dashboard
