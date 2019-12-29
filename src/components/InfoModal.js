import React from 'react';
import Modal from 'react-modal';

export default function InfoModal(props) {
  return (
    <Modal isOpen={true} contentLabel="description of the app">some text</Modal>
  )
}