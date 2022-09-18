import Customers from "../components/Customers";
import Invoices from "../components/Invoices";
import Dashboard from "../components/Dashboard";
import DetailedInvoice from "../components/DetailedInvoice";
import DetailedCustomer from "../components/DetailedCustomer";

const display = (component,setState,invoiceId,setInvoiceId) => {
  switch(component) {
    case
     "Customers":
      return <Customers state={component} setState={setState}/>
    case
     "Invoices":
      return <Invoices state={component} setState={setState} setInvoiceId={setInvoiceId}/> 
    case
      "DetailedInvoice":
       return <DetailedInvoice state={component} invoiceId={invoiceId}/>
    case
      "DetailedCustomer":
       return <DetailedCustomer state={component}/>  
    default: 
    return <Dashboard/>  
  }
}

export default display;