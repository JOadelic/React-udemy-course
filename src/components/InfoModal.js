import React, { useState } from 'react';
import Modal from 'react-modal';
import "./InfoModal.scss"
import ReactPlayer from 'react-player';


export default function InfoModal(props) {
  const [modalStatus, setModalStatus] = useState(true);

  console.log('props', props)


  return (
    <Modal
     ariaHideApp={false}
     className="modal" 
     isOpen={modalStatus} 
     contentLabel="description of the app"
     onRequestClose={()=> setModalStatus(false)}
     closeTimeoutMS={4000}
     >
      <button
       onClick={() => {
         setModalStatus(false)
         props.appInfo()
       }}
      >
      close
      </button>
      <ReactPlayer url="https://youtube.com/watch?v=F3Re_ysIlRw&t=7s" playing controls height='100%' width='100%'/>
    </Modal>
  )
}