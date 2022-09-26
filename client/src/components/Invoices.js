import React,{useState,useEffect} from 'react';

import axios from 'axios';
import Invoice from './Invoice';
import AddInvoice from './AddInvoice';
import InvoicesSearchBar from './InvoicesSearchBar';
const Invoices = ({state,setState,setInvoiceId, loading,setLoading}) => {
  
  const [invoices,setInvoices] = useState({list:[]});
  const [showInvoiceForm,setShowInvoiceForm] = useState(false);
  const [deleteInvoiceId,setDeleteInvoiceId] = useState(0);
  const [updateInvoiceId,setUpdateInvoiceId] = useState(0);
  const [invoiceInputs,setInvoiceInputs]=useState({
    orderId:0,
    name:'',
    email:'',
    photo:'',
    logo:'',
    country:'',
    street:'',
    city:'',
    province:'',
    zipcode:'',
    company:'',
    taxnumber:'',
    phone:'',
    title:'',
    date:'',
    duedate:'',
    notes:'',
    subtotal:0,
    balance:0,
    message:'Thank You for your business!',
    tabledata:{
      rOne:{
        description:'',quantity:0,unitprice:0,total:0},
      rTwo:{
        description:'',quantity:0,unitprice:0,total:0},
      rThree:{
        description:'',quantity:0,unitprice:0,total:0},
    }
  });
  // console.log(Object.values(invoiceInputs.tabledata))

  const [search,setSearch] = useState('');
  const [searchedInvoice,setSearchedInvoice] = useState([]);
  const [isListening, setIsListening] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      axios.get('http://localhost:8080/invoices')
      .then((response)=> {
      if(response.status === 200){
        setInvoices(({...invoices,list:response.data}))
      }
      })
      .then(()=>setLoading(false))
      .catch((err)=>`The Error is:${err}`);
    },[400])
  },[invoices.list.length])

  useEffect(()=>{
    if(deleteInvoiceId){
      axios.put(`http://localhost:8080/invoices/${deleteInvoiceId}/delete`,{invoiceId:deleteInvoiceId})
      .then((response)=>{
        setInvoices({...invoices,list:response.data.rows})
      })
    }
  },[deleteInvoiceId])

  useEffect(()=>{
    if(updateInvoiceId){
      const updatedInvoice = invoices.list.find((invoice)=>invoice.invoice_id == updateInvoiceId);
      setInvoiceInputs({...updatedInvoice})
      setShowInvoiceForm(true)
    }
  },[updateInvoiceId])

  return(
  <div className='invoices'>
    {invoices.list.length ?
    <React.Fragment>
      <div className='invoices__list-wrapper'>
        <InvoicesSearchBar search={search} setSearch={setSearch} 
        invoices={invoices} setSearchedInvoice={setSearchedInvoice} isListening={isListening} setIsListening={setIsListening}/>
        <div className='invoices__list'>
          {search ? 
          <React.Fragment>
            {searchedInvoice.map((invoice)=>
              <Invoice 
                key={invoice.invoice_id}
                invoiceId={invoice.invoice_id}
                orderId={invoice.orderid}
                setInvoiceId={setInvoiceId}
                state={state} 
                setState={setState}
                name={invoice.name}
                photo={invoice.photo}
                logo={invoice.logo} 
                company={invoice.company}
                date={invoice.date}
                balance={invoice.balance}
                setShowInvoiceForm={setShowInvoiceForm}
                setDeleteInvoiceId={setDeleteInvoiceId}
                setUpdateInvoiceId={setUpdateInvoiceId}
              />
            )} 
          </React.Fragment> : 
          <React.Fragment>
            {invoices.list.map((invoice)=>
              <Invoice 
              key={invoice.invoice_id}
              invoiceId={invoice.invoice_id}
              orderId={invoice.orderid}
              setInvoiceId={setInvoiceId}
              state={state} 
              setState={setState} 
              name={invoice.name}
              photo={invoice.photo}
              logo={invoice.logo}  
              company={invoice.company}
              date={invoice.date}
              balance={invoice.balance}
              setShowInvoiceForm={setShowInvoiceForm}
              setDeleteInvoiceId={setDeleteInvoiceId}
              setUpdateInvoiceId={setUpdateInvoiceId}
            />
            )} 
          </React.Fragment>}
        </div>
      </div>
      <AddInvoice invoices={invoices} setInvoices={setInvoices} showInvoiceForm={showInvoiceForm} setShowInvoiceForm={setShowInvoiceForm} invoiceInputs={invoiceInputs} setInvoiceInputs={setInvoiceInputs} updateInvoiceId={updateInvoiceId} setUpdateInvoiceId={setUpdateInvoiceId} loading={loading} setLoading={setLoading}/>
    </React.Fragment>
    : 
    <React.Fragment>
      <div className='invoices__list-wrapper'>
        <InvoicesSearchBar search={search} setSearch={setSearch} 
          invoices={invoices} setSearchedInvoice={setSearchedInvoice} isListening={isListening} setIsListening={setIsListening}/>
        {loading 
          ? <div className="lds-default invoice-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
          : null
        }
      </div>
      <AddInvoice invoices={invoices} setInvoices={setInvoices} showInvoiceForm={showInvoiceForm} setShowInvoiceForm={setShowInvoiceForm} invoiceInputs={invoiceInputs} setInvoiceInputs={setInvoiceInputs} updateInvoiceId={updateInvoiceId} setUpdateInvoiceId={setUpdateInvoiceId} loading={loading} setLoading={setLoading}/>
    </React.Fragment>
    }

  </div>)
}

export default Invoices
