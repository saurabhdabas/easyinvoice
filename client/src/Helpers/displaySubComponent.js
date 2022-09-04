import AddCustomer from '../components/AddCustomer';
import CustomerInfoForm from '../components/CustomerInfoForm';

const displaySubComponent = (subComponent,setIndex) => {
  switch(subComponent) {
    case
     "AddCustomer":
      return <AddCustomer setIndex={setIndex}/>
    case
     "CustomerForm":
      return <CustomerInfoForm/> 
  }
}

export default displaySubComponent;