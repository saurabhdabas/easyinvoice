import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { 
  AiFillIdcard,
  AiFillCreditCard,
  AiOutlineNumber,
  AiOutlineArrowLeft,
  AiFillCalendar,
  AiFillTag,
  AiOutlineDownload,
  AiFillDollarCircle,
  AiFillStar
  } from "react-icons/ai";

const DetailedOrder = ({orderId,orderAmount,orderDate,orderDescription,customerFirstName,customerPhoto,paymentDate,paymentStatus,paymentMethod}) => {
  
  
  const handleDownload = () => {
    const input = document.getElementsByClassName("DetailedOrder");
    html2canvas(input[0]).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 240);
      pdf.save(`ORD-000${orderId}.pdf`);
  })
  }
  return (
    <div className="DetailedOrder">
      <div className="DetailedOrder__action-btns">
        <h1 className='DetailedOrder__headline'>Order Information</h1>
        <div className='DetailedOrder__download' onClick={handleDownload}>
          <AiOutlineDownload size={20} color={'#E7E7E7'} style={{marginRight:'10'}}/>
          <span>Download</span>
        </div>
      </div>
      <div className="DetailedOrder__main-wrapper">
        <div className='DetailedOrder__item-wrapper'>
          <h3><AiOutlineNumber style={{marginRight:'20'}} size={25} color='#2287E3'/>Order Id</h3>
          <h3>{`ORD-000${orderId}`}</h3>
        </div>
        <div className='DetailedOrder__item-wrapper'>
          <h3><AiFillCalendar style={{marginRight:'20'}} size={25} color='#2287E3'/>Order Date</h3>
          <h3>{orderDate}</h3>
        </div>
        <div className='DetailedOrder__item-wrapper'>
          <h3><AiFillDollarCircle style={{marginRight:'20'}} size={25} color='#2287E3'/>Order Amount</h3>
          <h3>$&nbsp;{orderAmount}&nbsp;CAD</h3>
        </div>
        <div className='DetailedOrder__item-wrapper'>
          <h3><AiFillTag style={{marginRight:'20'}} size={25} color='#2287E3'/>Order Description</h3>
          <h3>{orderDescription}</h3>
        </div>
        <div className='DetailedOrder__item-wrapper'>
          <h3><AiFillIdcard style={{marginRight:'20'}} size={25} color='#2287E3'/>Customer Name</h3>
          <div>
            <img src={customerPhoto} alt='customer-photo' width='30' height='30'/>
            <h3>{customerFirstName}</h3>
          </div>
        </div>
        <div className='DetailedOrder__item-wrapper'>
          <h3><AiFillStar style={{marginRight:'20'}} size={25} color='#2287E3'/>Payment Status</h3>
          <h4>{paymentStatus}</h4>
        </div>
        <div className='DetailedOrder__item-wrapper'>
          <h3><AiFillCreditCard style={{marginRight:'20'}} size={25} color='#2287E3'/>Payment Method</h3>
          <h3>{paymentMethod}</h3>
        </div>
        <div className='DetailedOrder__item-wrapper'>
          <h3><AiFillCalendar style={{marginRight:'20'}} size={25} color='#2287E3'/>Payment Date</h3>
          <h3>{paymentDate}</h3>
        </div>
      </div>

      {/* <h4 className='DetailedOrder__footer'>{`Additional Notes : ${DetailedOrder.list.notes}`}</h4> */}
    </div>
  )
}

export default DetailedOrder;
