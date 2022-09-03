import Customers from "../components/Customers";
import Invoices from "../components/Invoices";
import Dashboard from "../components/Dashboard";

const display = (component) => {
  switch(component) {
    case
     "Customers":
      return <Customers/>
    case
     "Invoices":
      return <Invoices/> 
    default: 
    return <Dashboard/>  
  }
}

export default display;