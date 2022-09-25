import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Order from './Order';
import SearchBar from './SearchBar';
const Orders = ({setState,setOrderId,loading,setLoading}) => {

  const [orders,setOrders] = useState({list:[]});
  const [showOrder,setShowOrder] = useState(false);
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
  
  const ordersList = orders.list.map((order)=>{
    return (
      <Order
      key={order.order_id}
      orderId={order.order_id}
      orderDate={order.order_date}
      orderDescription={order.order_description}
      orderAmount={order.order_amount}
      setState={setState}
      orders={orders}
      setorderId={setOrderId}
      setorders={setOrders}
      setShowOrder={setShowOrder}
      />
    )
  })
  
  return(
    <div className='orders'>
      {orders.list.length ?
      <React.Fragment>
        <div className='orders__list-wrapper'>
        <SearchBar search={search} setSearch={setSearch} 
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
                setorderId={setOrderId}
                setorders={setOrders}
                setShowOrder={setShowOrder}
                />
              )} 
            </React.Fragment> : 
            <React.Fragment>
              {ordersList} 
            </React.Fragment>
            }
          </div>
        </div>
      </React.Fragment>
      : 
      <React.Fragment>
        <div className='orders__list-wrapper'>
          <SearchBar/>
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

