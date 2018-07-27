import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = props => (
    <Modal
      isOpen={props.modalOpen}
      onRequestClose={props.closeModal}
      contentLabel="Remove Expense"
      closeTimeoutMS={200}
      className="remove--modal"
      ariaHideApp={false}
      modalAction={props.modalAction}
    >
      <h3 className="remove--modal__title">Are You Sure You Want To Remove This Expense?</h3>
      <button className="button button--danger" onClick={props.modalAction}>
        Remove
      </button>
      <button className="button button--secondary" onClick={props.closeModal}>
        Cancel
      </button>
    </Modal>
  );
  
  export default ConfirmationModal;