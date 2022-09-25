const searchorders = (element,orders) => {
  if(element){
    console.log("orders:",orders);
    console.log("element:",element);
    const filteredorders = orders.list.filter((order)=>order.firstname.toLowerCase().includes(element.toLowerCase()));
    return filteredorders;
  }
}
export default searchorders;