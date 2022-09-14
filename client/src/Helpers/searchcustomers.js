const searchcustomers = (element,customers) => {
  if(element){
    const filteredCustomers = customers.list.filter((customer)=>customer.name.toLowerCase().includes(element.toLowerCase()));
    return filteredCustomers;
  }
}
export default searchcustomers;