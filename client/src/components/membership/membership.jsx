import React from 'react'
import Modal from 'react-modal';

function Membership({modalIsOpen, closeModal}) {
  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button onClick={closeModal()}>Close Modal</button>
      </Modal>
    </div>
  )
}

export default Membership