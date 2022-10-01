import React from "react";
export default function DeleteCustomerConfirmation({setConfirm,customerId,setDeleteCustomerId}){

  const handleCancel = () => {
    setConfirm(false)
  }
  const handleConfirm = () => {
    setDeleteCustomerId(customerId);
  }

  return (
    <main className="card card--confirm">
      <h3>Do you want to proceed ?</h3>
      <section className="card__actions">
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </section>
    </main>
  );
}