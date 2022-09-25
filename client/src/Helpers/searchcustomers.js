const searchcustomers = (element,customers) => {
  if(element){
    const filteredCustomers = customers.list.filter((customer)=>customer.firstname.toLowerCase().includes(element.toLowerCase()));
    return filteredCustomers;
  }
}
export default searchcustomers;