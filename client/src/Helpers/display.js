import Customers from "../components/Customers";
import Invoices from "../components/Invoices";
import Dashboard from "../components/Dashboard";
import Orders from "../components/Orders";
import DetailedInvoice from "../components/DetailedInvoice";
import DetailedCustomer from "../components/DetailedCustomer";

const display = (component,setState,invoiceId,setInvoiceId,loading,setLoading,customerId,setCustomerId) => {

  switch(component) {
    case
     "Customers":
      return <Customers state={component} setState={setState} loading={loading} setLoading={setLoading} setCustomerId={setCustomerId}/>
    case
     "Invoices":
      return <Invoices state={component} setState={setState} setInvoiceId={setInvoiceId} loading={loading} setLoading={setLoading}/>
    case   
    "Orders":
      return <Orders state={component} setState={setState} setInvoiceId={setInvoiceId} loading={loading} setLoading={setLoading}/>  
    case
      "DetailedInvoice":
       return <DetailedInvoice state={component} invoiceId={invoiceId} setState={setState}/>
    case
      "DetailedCustomer":
       return <DetailedCustomer state={component} customerId={customerId} setState={setState}/>  
    default: 
    return <Dashboard loading={loading} setLoading={setLoading} setInvoiceId={setInvoiceId} setState={setState}/>  
  }
}

export default display;