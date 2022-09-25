import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({orderDate,orderDescription,orderAmount,setShowOrder,orderId,setOrderId}) => {
  const navigate = useNavigate();

  return (
    <div className='order'>
      <div className='order__header'>
        <div className='order__description'>
          <h5>{orderDescription.toUpperCase()}</h5>
        </div>
        <div className='order__date'>
          <h5>{orderDate}</h5>
        </div>
      </div>
      <hr className="order__rule"/>
      <div className='order__main'>
        <div className='order__number'>
          <p>Order #</p>
          <p>ORD-000{orderId}</p>
        </div>
        <div className='order__amount'>
          <p>Amount</p>
          <p>{orderAmount}</p>
        </div>
      </div>
      <div className='order__footer'>
        <button 
        className='order__details' 
        onClick={()=>{
          // navigate(`/orders/${orderId}`)
          // setState(['Detailedorder'])
          // setOrderId(orderId)
        }} 
        id={orderId}>Details</button>
      </div>
    </div>
  )
}

export default Order;
