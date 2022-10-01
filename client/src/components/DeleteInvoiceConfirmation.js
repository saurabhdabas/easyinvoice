import React from "react";
export default function DeleteInvoiceConfirmation({invoiceDeletionConfirm,setInvoiceDeletionConfirm,invoiceId,setDeleteInvoiceId}){

  const handleCancel = () => {
    setInvoiceDeletionConfirm(false)
  }
  const handleConfirm = () => {
    setDeleteInvoiceId(invoiceId);
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