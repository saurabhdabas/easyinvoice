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
    axios.get('http://localhost:8080/invoices')
    .then((response)=> {
      if(response.status === 200){
        setInvoices(({...invoices,list:response.data}))
      }
    })
    .catch((err)=>`The Error is:${err}`);
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
      const updatedInvoice = invoices.list.find((invoice)=>invoice.id == updateInvoiceId);
      setInvoiceInputs({...updatedInvoice})
      setShowInvoiceForm(true)
    }
  },[updateInvoiceId])

  return(
  <div className='invoices'>
    {invoices.list.length ?
    <React.Fragment>
      <div className='invoices__list-wrapper'>
        <div className='invoices__list'>
          <InvoicesSearchBar search={search} setSearch={setSearch} 
          invoices={invoices} setSearchedInvoice={setSearchedInvoice} isListening={isListening} setIsListening={setIsListening}/>
          {search ? 
          <React.Fragment>
            {searchedInvoice.map((invoice)=>
              <Invoice 
                key={invoice.id}
                invoiceId={invoice.id}
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
              key={invoice.id}
              invoiceId={invoice.id}
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
        {/* <div className='invoices__list'>
          <p>Click&nbsp;
            <span><img src='./plus.png' alt='add-icon' width='20' height='20'/></span> 
            &nbsp;Icon to get started 
          </p>
        </div> */}
      </div>
      <AddInvoice invoices={invoices} setInvoices={setInvoices} showInvoiceForm={showInvoiceForm} setShowInvoiceForm={setShowInvoiceForm} invoiceInputs={invoiceInputs} setInvoiceInputs={setInvoiceInputs} updateInvoiceId={updateInvoiceId} setUpdateInvoiceId={setUpdateInvoiceId} loading={loading} setLoading={setLoading}/>
    </React.Fragment>
    }

  </div>)
}

export default Invoices
