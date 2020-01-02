import React, { useState } from 'react';
import Modal from 'react-modal';
import "./InfoModal.scss"
import ReactPlayer from 'react-player';


export default function InfoModal(props) {
  const [modalStatus, setModalStatus] = useState(true);

  console.log('props', props)


  return (
    <Modal ariaHideApp={false} className="modal" isOpen={modalStatus} contentLabel="description of the app">
      <button
       onClick={() => {
         setModalStatus(false)
         props.appInfo()
       }}
      >
      close
      </button>
      <h3>test</h3>
      <ReactPlayer url="./random.MOV" playing controls height='400'/>
    </Modal>
  )
}