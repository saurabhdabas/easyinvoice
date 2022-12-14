import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { AiFillLayout,AiOutlineLink, AiFillFund, AiFillSnippets, AiFillWarning } from "react-icons/ai";
import getNumberOfDays from '../Helpers/dueDaysCalculator';
import PerformaceChart from './PerformanceChart';
import { useNavigate } from 'react-router-dom';
const Dashboard = ({setState,loading,setLoading,setInvoiceId,setCustomerId}) => {

  const[unpaidInvoices,setunpaidInvoices]=useState({data:[]});
  const[paidInvoices,setpaidInvoices]=useState({data:[]});
  const[partialInvoices,setpartialInvoices]=useState({data:[]});
  const[invoicesWithOrdersStatus,setInvoicesWithOrdersStatus]=useState({data:[]});
  const[chartData,setChartData]=useState([]);

  useEffect(()=>{
    console.log(loading);
    setLoading(true);
    setTimeout(()=>{
      axios.get('http://localhost:8080/dashboard')
      .then((response)=>{
        console.log(response.data[1])
        const [unpaidinvoices,invoiceswithordersstatus,paidoffinvoices,partials] = [...response.data]
        setInvoicesWithOrdersStatus({...invoicesWithOrdersStatus,data:invoiceswithordersstatus});
        setunpaidInvoices({...unpaidInvoices,data:unpaidinvoices});
        setpaidInvoices({...paidInvoices,data:paidoffinvoices})
        setpartialInvoices({...paidInvoices,data:partials})
        setChartData((prev)=>[...prev,response.data]);
        setLoading(false);
      });
    },[200]);
    
  },[])
  const navigate = useNavigate();

  const unpaidInvoicesArray = unpaidInvoices.data.map((dataset)=>{ 
    console.log("dataset:",dataset);
    const dueBydays = getNumberOfDays(dataset.date,dataset.duedate);
    const handleInvoiceNavigation = () => {
      setInvoiceId(dataset.invoice_id)
      setState(['DetailedInvoice']);
      navigate(`/invoices/${dataset.invoice_id}`)
    }
    const handleCustomerNavigation = () => {
      setCustomerId(dataset.id)
      setState(['DetailedCustomer']);
      navigate(`/customers/${dataset.id}`)
    }

    const handleEmail = () => {
      window.location.href = `
      mailto:${dataset.email}
      ?subject=Unpaid Invoice INV-000${dataset.invoice_id}
      &body=Hello%20${dataset.name},%20
      %0D%0A
      Kindly pay for your order as soon as possible. Your balance is:${dataset.subtotal - dataset.payment_amount}.00 CAD.
      `;
    }

    return (
      <tr key={dataset.phonenumber}>
        <td>          
          <span className='dashboard__invoice-number'>
          <h3>INV-000{dataset.invoice_id}</h3>
          <AiOutlineLink color={'#2287E3'} size={20} onClick={handleInvoiceNavigation} style={{cursor:'pointer'}}/>
          </span>
        </td>
        <td>
          <span className='dashboard__invoice-number'>
          <h3>CUS-000{dataset.id}</h3>
          <AiOutlineLink color={'#2287E3'} size={20} onClick={handleCustomerNavigation} style={{cursor:'pointer'}}/>
          </span>
        </td>
        <td><div><img src={dataset.photo} width='30'/>&emsp;{dataset.name}</div></td>
        <td>{dataset.phonenumber}</td>
        <td>
          <div>{dataset.date}</div>
          <div className='duedays'>Due in {dueBydays} days</div>
        </td>
        <td>{dataset.duedate}</td>
        <td>${dataset.balance}</td>
        <td><button type='submit' onClick={handleEmail}>Send Reminder</button></td>
      </tr>
    )}
  );
  
  const invoicesWithOrdersStatusArray = invoicesWithOrdersStatus.data.map((dataset)=>{

    const handleInvoiceNavigation = () => {
      setInvoiceId(dataset.invoice_id)
      setState(['DetailedInvoice']);
      navigate(`/invoices/${dataset.invoice_id}`)
    }
    const handleCustomerNavigation = () => {
      setCustomerId(dataset.id)
      setState(['DetailedCustomer']);
      navigate(`/customers/${dataset.id}`)
    }
    return (
      <tr>
        <td>
          <span className='dashboard__invoice-number'>
          <h3>INV-000{dataset.invoice_id}</h3>
          <AiOutlineLink color={'#2287E3'} size={20} onClick={handleInvoiceNavigation} style={{cursor:'pointer'}}/>
          </span>
        </td>
        <td>          
          <span className='dashboard__invoice-number'>
          <h3>CUS-000{dataset.id}</h3>
          <AiOutlineLink color={'#2287E3'} size={20} onClick={handleCustomerNavigation} style={{cursor:'pointer'}}/>
          </span>
        </td>
        <td><div><img src={dataset.photo} width='30'/>&emsp;{dataset.name}</div></td>
        <td>{dataset.duedate}</td>
        <td>
          <h5 
          className={dataset.payment_status === "UnPaid" ?'UnPaid' : dataset.payment_status === 'Partial' ? 'Partial' : ' Paid'}>
            {dataset.payment_status}
          </h5>
        </td>
        <td>${dataset.payment_amount}</td>
      </tr>
    )}
    )

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
          <div className='dashboard__performance-wrapper'>
            <div className='dashboard__performance'>
              {chartData.length?<PerformaceChart chartData={chartData}/>: <></>}
            </div>
          </div>
        </div>
        <div className='dashboard__table-wrapper'>
          <div className='dashboard__table-title'>
            <h2>Recent 3 Invoices</h2>
            <AiFillSnippets size={30}/>
          </div> 
          <table className='dashboard__invoices'>
            <thead>
              <tr>
                <th>#</th>
                <th>Client #</th>
                <th>Client</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Amount Paid(CAD)</th>
              </tr>
            </thead>
            <tbody>
            {loading 
  
            ?  <div className="lds-default dashboard-spinnerTwo"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            : <React.Fragment>
                {invoicesWithOrdersStatus.data.length ? invoicesWithOrdersStatusArray.slice(-3) : <div className='empty-container'></div>}
              </React.Fragment>
            }
            </tbody>
          </table>
        </div> 
      </div>
      <h2 className='dashboard__message'>You have {unpaidInvoices.data ? unpaidInvoices.data.length : 0} Unpaid Invoice(s)</h2>
      <div className='dashboard__table-wrapper'>
        <div className='dashboard__table-title'>
          <h2>Unpaid Invoices</h2>
          <AiFillWarning size={30}/>
        </div>
        <table className='dashboard__unpaid-invoices'>
          <thead>
            <tr>
              <th>#</th>
              <th>Client #</th>
              <th>Client</th>
              <th>Phone Number</th>
              <th>Invoice Date</th>
              <th>Due Date</th>
              <th>Total (CAD)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading 
  
            ?  <div className="lds-default dashboard-spinnerOne"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                      
            : <React.Fragment>
              {unpaidInvoices.data.length ? unpaidInvoicesArray: <div className='empty-container'></div>}
              </React.Fragment>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
