const searchinvoices = (element,invoices) => {
  if(element){
    const filteredInvoices = invoices.list.filter((invoice)=>invoice.name.toLowerCase().includes(element.toLowerCase()));
    return filteredInvoices;
  }
}
export default searchinvoices;