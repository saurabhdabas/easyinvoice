import React,{useState,useEffect} from 'react';
import DetailedOrder from './DetailedOrder';

import { AiFillTag } from 'react-icons/ai';
const Order = ({orders,orderDate,orderDescription,orderAmount,paymentStatus,orderId,setOrderId,customerPhoto,customerFirstName,setDetailedOrder}) => {
  
  const [toggle,setToggle] = useState(false);
  
  // setDetailedOrder([filteredOrder])
  // console.log(orders.list.filter((order)=>order.orderid === value));
  useEffect(()=>{
    if(orders.list.length){
      const filteredOrder = orders.list.find((order)=>order.order_id == Number(orderId));
      setDetailedOrder([filteredOrder])
    }
  },[toggle])
  
  
  return (
    <div className='order-wrapper'>
      <div className='order'>
        <div className='order__header'>
          <div className='order__description'>
            <h5><AiFillTag size={20} style={{marginRight:'5'}}/>&nbsp;{orderDescription.toUpperCase()}</h5>
          </div>
          <div className='order__logos'>
            <img src={customerPhoto} alt='name-logo' width='25' height='25'/>
            <h5>{customerFirstName.toUpperCase()}</h5>
          </div>
        </div>
        <hr className="order__rule"/>
        <div className='order__main'>
          <div className='order__number'>
            <p>Order # 000{orderId} </p>
            <p>{orderDate}</p>
          </div>
          <div className='order__amount'>
            <p>Amount</p>
            <p>$ {orderAmount}</p>
          </div>
        </div>
        <div className='order__footer'>
          <div 
          className={
            paymentStatus === 'UnPaid' ? 'order__status UnPaid' : paymentStatus === 'Partial' ? 'order__status Partial' : 'order__status Paid' } 
          >{paymentStatus}</div>
          <button id={orderId} className='order__details' onClick={
            (event)=>{
            setOrderId(event.target.id)
            setToggle(!toggle)
            }}>
            Details
          </button>
        </div>
        
      </div>
    </div>
    
  )
}

export default Order;
