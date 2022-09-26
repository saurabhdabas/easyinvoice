import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Order from './Order';
import OrdersSearchBar from './OrdersSearchBar';
import DetailedOrder from './DetailedOrder';
const Orders = ({setState,loading,setLoading}) => {
  
  const [orders,setOrders] = useState({list:[]});
  const [orderId,setOrderId] = useState(1);
  const [detailedOrder,setDetailedOrder] = useState([]);
  const [search,setSearch] = useState('');
  const [searchedOrder,setSearchedOrder] = useState([]);
  const [isListening, setIsListening] = useState(false);


  useEffect(()=>{
    setLoading(true);
    
    setTimeout(()=>{
      axios.get('http://localhost:8080/orders')
      .then((response)=> {
        if(response.status === 200){
          setOrders(({...orders,list:response.data}))        
        }
      })
      .then(()=>setLoading(false))
      .catch((err)=>`The Error is:${err}`);
    },[400])
  },[orders.list.length])
  console.log("orderId:",orderId);
  const ordersArray = orders.list.map((order)=>{
    
    return (
      <Order
      key={order.order_id}
      orderId={order.order_id}
      orderDate={order.order_date}
      orderDescription={order.order_description}
      orderAmount={order.order_amount}
      setState={setState}
      orders={orders}
      setOrderId={setOrderId}
      setOrders={setOrders}
      customerPhoto={order.photo}
      customerFirstName={order.firstname}
      paymentStatus={order.payment_status}
      setDetailedOrder={setDetailedOrder}
      />
    )
  })
  console.log("DetailedOrder:",detailedOrder);
  return(
    <div className='orders'>
      {orders.list.length ?
      <React.Fragment>
        <div className='orders__list-wrapper'>
        <OrdersSearchBar search={search} setSearch={setSearch} 
        orders={orders} setSearchedOrder={setSearchedOrder} isListening={isListening} setIsListening={setIsListening}/>
        <div className='orders__list'>
            {search ? 
            <React.Fragment>
              {searchedOrder.map((order)=>
                <Order
                key={order.order_id}
                orderId={order.order_id}
                orderDate={order.order_date}
                orderDescription={order.order_description}
                orderAmount={order.order_amount}
                setState={setState}
                orders={orders}
                setOrderId={setOrderId}
                setOrders={setOrders}
                customerPhoto={order.photo}
                customerFirstName={order.firstname}
                paymentStatus={order.payment_status}
                setDetailedOrder={setDetailedOrder}
                />
              )} 
            </React.Fragment> : 
            <React.Fragment>
              {ordersArray} 
            </React.Fragment>
            }
          </div>
        </div>
        {detailedOrder.map((order)=>{

          return (
            <DetailedOrder
            key={order.order_id}
            orderId={orderId}
            orderDate={order.order_date}
            orderDescription={order.order_description}
            orderAmount={order.order_amount}
            setState={setState}
            orders={orders}
            setOrderId={setOrderId}
            setOrders={setOrders}
            customerPhoto={order.photo}
            customerFirstName={order.firstname}
            paymentStatus={order.payment_status}
            paymentMethod={order.payment_method}
            paymentDate={order.payment_date}
            paymentAmount={order.payment_amount}
          />
          )
        })}
      </React.Fragment>
      : 
      <React.Fragment>
        <div className='orders__list-wrapper'>
          <OrdersSearchBar/>
          {loading 
            ? <div className="lds-default order-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
            : <></>}
        </div>
      </React.Fragment>
      }
    </div> 
  )
}

export default Orders

