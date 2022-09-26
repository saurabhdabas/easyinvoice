import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiFillPhone,
   AiFillMail,
   AiOutlineArrowLeft,
   AiOutlineNumber,
   AiFillShop,
   AiFillEnvironment,
   AiFillWarning,
   AiFillCheckCircle,
   AiFillDollarCircle,
   AiFillCalendar,
   AiFillSignal
  } from "react-icons/ai";
import { DiGoogleAnalytics } from 'react-icons/di';
import MonthlyOrderChart from './MonthlyOrderChart';

const DetailedCustomer = ({state,customerId}) => {
  const navigate = useNavigate();

  const [detailedCustomer,setDetailedCustomer] = useState({list:[]});
  const [chart, setChart] = useState([]);
  const [totalAmountDue,setTotalAmountDue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUnpaidInvoices,setTotalUnpaidInvoices] = useState(0);

  useEffect(()=>{
    if(customerId){
      axios.get(`http://localhost:8080/customers/${customerId}`)
      .then((response)=> {
        const [customerInfo,orderInfo]=[...response.data];
        if(response.data){
          console.log(orderInfo);
          setDetailedCustomer({...detailedCustomer,list:customerInfo});
          setChart((prev)=>[...prev,orderInfo]);
        }

        const totalAmount = (orderInfo) => {
        const listOfPaidAmounts = orderInfo.map((order)=>{
          console.log(order);
        return order.payment_status === 'Paid' || order.payment_status === 'Partial'  ? order.order_amount : 0
        });
        const listOfOrderAmounts = orderInfo.map((order)=>{
          return order.order_amount
        })
        const totalAmount = listOfOrderAmounts.reduce((acc,curr)=>{acc += curr;
          return acc },0);
        const paidAmount = listOfPaidAmounts.reduce((acc,curr)=>{acc += curr;
          return acc },0);
        setTotalAmountDue(totalAmount - paidAmount );
      }
        totalAmount(orderInfo);

        const totalOrders = (orderInfo) => {
          let count=0;
          orderInfo.map((order)=> {
            count += 1;
          })
          setTotalOrders(count); 
        }
        totalOrders(orderInfo);
        const totalUnpaidInvoices = (orderInfo) => {
          const unpaidInvoices = orderInfo.filter((order)=>order.payment_status === "UnPaid");
          setTotalUnpaidInvoices(unpaidInvoices.length);
        }
        totalUnpaidInvoices(orderInfo);

      })
      .catch((err)=>`The Error is:${err}`);
    }
  },[])
  const handleNavigation = () => {
    // setState('Invoices');
    navigate('/customers');
  }
  console.log(detailedCustomer);
  return (
    <div className="detailedCustomer">
      {chart[0] ? 
      <React.Fragment>
      <div className='detailedCustomer__back-btn' onClick={handleNavigation}>
        <AiOutlineArrowLeft size={20} style={{marginRight:'5'}}/>
        <span>Back to Customers</span>
      </div>
      <hr className="detailedCustomer__rule"/>
      <div className="detailedCustomer__main-content">
        <div className='detailedCustomer__Info-card-wrapper'>
          <div className='detailedCustomer__Info-card'>
            <div className="detailedCustomer__header">
              <img src={detailedCustomer.list.photo} width ="150" height="150"/>
            </div>
          </div>
          <div className="detailedCustomer__main">
            <h1>{`${detailedCustomer.list.firstname} ${detailedCustomer.list.lastname}`}</h1>
            <div className="detailedCustomer__row-wrapper">
              <div className="detailedCustomer__row">
              <AiOutlineNumber size={25} style={{marginRight:'10'}}/>
              <h3>Client Number</h3>
              </div>
              <span>{`CUS-000${detailedCustomer.list.id}`}</span>
            </div>
            <div className="detailedCustomer__row-wrapper">
              <div className="detailedCustomer__row">
                <AiFillMail size={25} style={{marginRight:'10'}}/>
                <h3>Email Address</h3>
              </div>
              <p>{detailedCustomer.list.email}</p>
            </div>
            <div className="detailedCustomer__row-wrapper">
              <div className="detailedCustomer__row">
                <AiFillPhone size={25} style={{marginRight:'10'}}/>
                <h3>Phone Number</h3>
              </div>
              <p>{detailedCustomer.list.phonenumber}</p>
            </div>
            <div className="detailedCustomer__row-wrapper">
              <div className="detailedCustomer__row">
              <AiFillShop size={25} style={{marginRight:'10'}}/>
              <h3>Business</h3>
              </div>
              <div className="detailedCustomer__row">
                <img src={detailedCustomer.list.company_logo} width ="20" height="20"/>
                <span>{detailedCustomer.list.company_name}</span>
              </div>
            </div>
            <div className="detailedCustomer__row-wrapper">
              <div className="detailedCustomer__row">
              <AiFillEnvironment size={25} style={{marginRight:'10'}}/>
              <h3>Business Address</h3>
              </div>
              <address className="detailedCustomer__column">
                <span>{`${detailedCustomer.list.street}`}</span>
                <span>{`${detailedCustomer.list.zipcode},${detailedCustomer.list.city}`}</span>
                <span>{`${detailedCustomer.list.province},${detailedCustomer.list.country}`}</span>
              </address>
            </div>
          </div>
        </div>
        <div className='detailedCustomer__stats-wrapper'>
          <div className='detailedCustomer__stats'>
            <div className="detailedCustomer__stats-header">
              <h2>Customer Statistics</h2>
              <DiGoogleAnalytics size={30}/>
            </div>
            <div className='detailedCustomer__stats-component'>
              <div className='detailedCustomer__stats-description'>
                <AiFillCalendar size={30} />
                <h3>CUSTOMER SINCE</h3>
              </div>
              <h2 className='detailedCustomer__stats-num'>{detailedCustomer.list.customersince}</h2>
            </div>
            <div className='detailedCustomer__stats-component'>
              <div className='detailedCustomer__stats-description'>
                <AiFillCheckCircle size={30} color={'#087149'}/>
                <h3>TOTAL ORDERS</h3>
              </div>
              <h2 className='detailedCustomer__stats-num'>{totalOrders ? totalOrders : 0}</h2>
            </div>
            <div className='detailedCustomer__stats-component'>
              <div className='detailedCustomer__stats-description'>
                <AiFillWarning size={30} color={'#b72821'}/>
                <h3>UNPAID INVOICES</h3>
              </div>
              <h2 className='detailedCustomer__stats-num'>
                {totalUnpaidInvoices ? totalUnpaidInvoices : 0}
              </h2>
            </div>
            <div className='detailedCustomer__stats-component'>
              <div className='detailedCustomer__stats-description'>
                <AiFillDollarCircle size={30} color={'#2287E3'}/>
                <h3>AMOUNT DUE</h3>
              </div>
              <h2 className='detailedCustomer__stats-num'>$ {totalAmountDue ? totalAmountDue : 0}</h2>
            </div>
            
          </div>
          <div className='detailedCustomer__stats-charttitle'>
            <h2>Previous Orders</h2>
            <AiFillSignal size={30}/>
          </div>
          <div className="detailedCustomer__stats-chart">
          {chart[0].length ? <MonthlyOrderChart chart={chart[0].slice(-6)}/> : <img src="https://mkposhak.com/empty%20cart%20icon.svg" alt="empty-cart" width='200'/>}
          </div>
        </div>
      </div>
      </React.Fragment> 
      : "NO DATA"}
      
    </div>
  )
}

export default DetailedCustomer;
