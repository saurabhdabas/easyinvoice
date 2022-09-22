import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft,AiOutlineDownload } from "react-icons/ai";
import axios from 'axios';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const DetailedInvoice = ({state,setState,invoiceId}) => {
  const navigate = useNavigate();
  const [detailedInvoice,setDetailedInvoice] = useState({list:[]});
  const [clipText,setClipText] = useState("");
  const handleNavigation = () => {
    setState('Invoices');
    navigate('/invoices');
  }

  useEffect(()=>{
    if(invoiceId){
      axios.get(`http://localhost:8080/invoices/${invoiceId}`)
      .then((response)=> {
        console.log(response);
        if(response.data){
          setDetailedInvoice({...detailedInvoice,list:response.data})
        }
      })
      .catch((err)=>`The Error is:${err}`);
    }
  },[])

  const handleDownload = () => {
    const input = document.getElementsByClassName("DetailedInvoice");
    html2canvas(input[0]).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 240);
      pdf.save(`INV-000${detailedInvoice.list.id}.pdf`);
  })
  }
  return (
    <div className="DetailedInvoice">
      <div className='DetailedInvoice__back-btn'>
        <AiOutlineArrowLeft size={20} style={{marginRight:'5'}}/>
        <span>Back to Invoices</span>
      </div>
      <hr/>
      <div className="DetailedInvoice__header">
        <h3>INVOICE NO -&nbsp;{`INV-000${detailedInvoice.list.id}`}</h3>
        <div className="DetailedInvoice__action-btns">
          <div className='DetailedInvoice__download' onClick={handleDownload}>
            <AiOutlineDownload size={20} color={'#F7F7F7'} />
            <span>Download</span>
          </div>
        </div>
      </div>
      <div className="DetailedInvoice__address-wrapper">
        <div className="DetailedInvoice__address">
          <h3>{detailedInvoice.list.company}</h3>
          <address>
            <p>{`${detailedInvoice.list.street}, ${detailedInvoice.list.city}, ${detailedInvoice.list.province}, ${detailedInvoice.list.zipcode}`}</p>
            <p>{detailedInvoice.list.email}</p>
            <p>{detailedInvoice.list.phone}</p>
          </address>
        </div>
        <div className="DetailedInvoice__Logo">
          <img src={detailedInvoice.list.logo} alt="company-logo" width ="100" height="100"/>
        </div>
      </div>
      <hr/>
      <div className="DetailedInvoice__details">
        <p>Bill To</p>
        <p>{detailedInvoice.list.name}</p>
        <p>Created</p>
        <p>{detailedInvoice.list.date}</p>
        <p>Due</p>
        <p>{detailedInvoice.list.duedate}</p>
      </div>
      <hr/>
      <div className='DetailedInvoice__table-wrapper'>
          <div>
            <p>Services</p>
          </div>
          <table className='DetailedInvoice__table'>
            <thead>
              <tr className='DetailedInvoice__table-header'>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total (CAD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='DetailedInvoice__row'>
                  {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rOne.description : ''}
                </td>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rOne.quantity : ''}
                </td>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rOne.unitprice : ''}
                </td>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rOne.total : ''}
                </td>
              </tr>
              <tr>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rTwo.description : ''}
                </td>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rTwo.quantity : ''}
                </td>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rTwo.unitprice : ''}
                </td>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rTwo.total : ''}
                </td>
              </tr>
              <tr>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rThree.description : ''}
                </td>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rThree.quantity : ''}
                </td>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rThree.unitprice : ''}
                </td>
                <td className='DetailedInvoice__row'>
                {detailedInvoice.list.tabledata ? detailedInvoice.list.tabledata.rThree.total : ''}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className='DetailedInvoice__table-footer'>
                <td></td>
                <td></td>
                <td>Subtotal</td>
                <td>{detailedInvoice.list.tabledata ? detailedInvoice.list.subtotal : ''}</td>
              </tr>
              <tr className='DetailedInvoice__table-footer'>
                <td></td>
                <td></td>
                <td>PST (%)</td>
                <td>0.00</td>
              </tr>
              <tr className='DetailedInvoice__table-footer'>
                <td></td>
                <td></td>
                <td>GST (%)</td>
                <td>5.00</td>
              </tr>
              <tr className='DetailedInvoice__table-footer'>
                <td></td>
                <td></td>
                <td>Balance</td>
                <td>{detailedInvoice.list.tabledata ? detailedInvoice.list.balance : ''}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <hr/>
        <h4 className='DetailedInvoice__footer'>{`Additional Notes : ${detailedInvoice.list.notes}`}</h4>
    </div>
  )
}

export default DetailedInvoice;
