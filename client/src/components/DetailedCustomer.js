import React,{useState,useEffect} from 'react';
import axios from 'axios';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useNavigate } from 'react-router-dom';
import { AiFillPhone, AiFillMail,AiFillDatabase,AiOutlineShareAlt,AiOutlineDownload,AiOutlineBackward } from "react-icons/ai";

const DetailedCustomer = ({state,customerId}) => {
  const navigate = useNavigate();
  const doc = new jsPDF();

  const [detailedCustomer,setDetailedCustomer] = useState({list:[]});
  const [clipText,setClipText] = useState("");
  
  useEffect(()=>{
    axios.get(`http://localhost:8080/customers/${customerId}`)
    .then((response)=> {
      console.log(response);
      if(response.data){
        setDetailedCustomer({...detailedCustomer,list:response.data})
      }
    })
    .catch((err)=>`The Error is:${err}`);
  },[])
  const handleNavigation = () => {
    // setState('Invoices');
    navigate('/customers');
  }


  return (
    <div className="detailedCustomer">
      <div className='detailedCustomer__back-btn' onClick={handleNavigation}>
        <AiOutlineBackward size={20} color={'#2287E3'} />
        <span>Back to Customers</span>
      </div>
      <hr/>
      <div className="detailedCustomer__header">
        <h3>Customer # -&nbsp;{`CUS-000${detailedCustomer.list.id}`}</h3>
      </div>
      <div className="detailedCustomer__clientInfo">
        <img src={detailedCustomer.list.photo} width ="100" height="100"/>
        <h2>{detailedCustomer.list.name}</h2>
      </div>
      <div className="detailedCustomer__address-wrapper">
        <div className="detailedCustomer__address">
          <h3>{detailedCustomer.list.company}</h3>
          <address>
            <p>{`${detailedCustomer.list.street}, ${detailedCustomer.list.city}, ${detailedCustomer.list.province}, ${detailedCustomer.list.zipcode}`}</p>
          </address>
        </div>
        <div className="detailedCustomer__Logo">
          <img src={detailedCustomer.list.logo} width ="100" height="100"/>
        </div>
      </div>
      <hr/>
      <div className="detailedCustomer__details">
        <p><AiFillMail/></p>
        <p>{detailedCustomer.list.email}</p>
        <p><AiFillPhone/></p>
        <p>{detailedCustomer.list.phone}</p>
        <p><AiFillDatabase/></p>
        <p>{detailedCustomer.list.orders}</p>
      </div>
      <hr/>
      <h4 className='DetailedCustomer__footer'>{`Customer Since : ${detailedCustomer.list.date}`}</h4>
    </div>
  )
}

export default DetailedCustomer;
