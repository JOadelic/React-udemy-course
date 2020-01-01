import React from 'react';
import Modal from 'react-modal';

export default function InfoModal(props) {
  return (
    <Modal isOpen={!!props.modalStatus} contentLabel="description of the app">
    </Modal>
  )
}