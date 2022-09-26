import React from 'react'
import SideNavigation from '../components/SideNavigation'
import display from '../Helpers/display';


const Home = ({state,setState,history,className,setClassName,loading,setLoading,customerId,setCustomerId,invoiceId,setInvoiceId,orderId,setOrderId}) => {
  // console.log("invoiceID:",invoiceId);
  return (
    <div>
      <div className='main'>
        <SideNavigation state={state} setState={setState} history={history} className={className} setClassName={setClassName}/>
        {display(state[0],setState,loading,setLoading,customerId,setCustomerId,invoiceId,setInvoiceId,orderId,setOrderId)}
      </div>
    </div>
  )
}

export default Home;


