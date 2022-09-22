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
  
  useEffect(()=>{
    if(customerId){
      axios.get(`http://localhost:8080/customers/${customerId}`)
      .then((response)=> {
        console.log(response);
        if(response.data){
          setDetailedCustomer({...detailedCustomer,list:response.data})
        }
      })
      .catch((err)=>`The Error is:${err}`);
    }
  },[])
  const handleNavigation = () => {
    // setState('Invoices');
    navigate('/customers');
  }


  return (
    <div className="detailedCustomer">
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
            <h1>{detailedCustomer.list.name}</h1>
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
              <p>{detailedCustomer.list.phone}</p>
            </div>
            <div className="detailedCustomer__row-wrapper">
              <div className="detailedCustomer__row">
              <AiFillShop size={25} style={{marginRight:'10'}}/>
              <h3>Business</h3>
              </div>
              <div className="detailedCustomer__row">
                <img src={detailedCustomer.list.logo} width ="20" height="20"/>
                <span>{detailedCustomer.list.company}</span>
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
          {/* <h4 className='detailedCustomer__footer'>{`Customer Since : ${detailedCustomer.list.date}`}</h4> */}
        </div>
        <div className='detailedCustomer__stats-wrapper'>
          <div className='detailedCustomer__stats'>
            <div className="detailedCustomer__stats-header">
              <h2>Customer Statistics</h2>
              <DiGoogleAnalytics size={30}/>
            </div>
            <div className='detailedCustomer__stats-component'>
              <div className='detailedCustomer__stats-description'>
                <AiFillCheckCircle size={30} color={'#087149'}/>
                <h3>TOTAL ORDERS</h3>
              </div>
              <h1 className='detailedCustomer__stats-num'>0&nbsp;9</h1>
            </div>
            <div className='detailedCustomer__stats-component'>
              <div className='detailedCustomer__stats-description'>
                <AiFillWarning size={30} color={'#b72821'}/>
                <h3>UNPAID INVOICES</h3>
              </div>
              <h1 className='detailedCustomer__stats-num'>0&nbsp;1</h1>
            </div>
            <div className='detailedCustomer__stats-component'>
              <div className='detailedCustomer__stats-description'>
                <AiFillDollarCircle size={30} color={'#2287E3'}/>
                <h3>AMOUNT PAID</h3>
              </div>
              <h1 className='detailedCustomer__stats-num'>9000</h1>
            </div>
            <div className='detailedCustomer__stats-component'>
              <div className='detailedCustomer__stats-description'>
                <AiFillCalendar size={30} />
                <h3>NEXT INVOICE DUE</h3>
              </div>
              <h1 className='detailedCustomer__stats-num'>2022-09-25</h1>
            </div>
          </div>
          <div className='detailedCustomer__stats-chart'>
            <h2>Last Six Orders</h2>
            <AiFillSignal size={30}/>
          </div>
          <MonthlyOrderChart/>
        </div>
      </div>
    </div>
  )
}

export default DetailedCustomer;
