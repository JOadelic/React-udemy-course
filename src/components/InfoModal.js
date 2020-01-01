import React, { useState } from 'react';
import Modal from 'react-modal';
import "./InfoModal.scss"

export default function InfoModal(props) {
  const [modalStatus, setModalStatus] = useState(true);

  return (
    <Modal className="modal" isOpen={modalStatus} contentLabel="description of the app">
      <button onClick={() => setModalStatus(false)}>close</button>
      <h3>test</h3>
    </Modal>
  )
}