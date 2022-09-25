import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillTag } from 'react-icons/ai';
const Order = ({orderDate,orderDescription,orderAmount,paymentStatus,setShowOrder,orderId,setOrderId,customerPhoto,customerFirstName}) => {
  const navigate = useNavigate();

  return (
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
        <button 
        className='order__details' 
        onClick={()=>{
          // navigate(`/orders/${orderId}`)
          // setState(['Detailedorder'])
          setOrderId(orderId)
        }} 
        id={orderId}>Details</button>
      </div>
    </div>
  )
}

export default Order;
