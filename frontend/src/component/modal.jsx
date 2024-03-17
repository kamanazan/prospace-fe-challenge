export const ModalConfirmation = ({ title, bodyMessage, onClickCancel, onClickConfirm }) => {
  
  return (
    <div className='confirmation-modal'>
      <div className='confirmation-content'>
        <div className='confirmation-title'>
          <h2>{title}</h2>
        </div>
        <div className='confirmation-text'>
          <p>{bodyMessage} </p>
        </div>
        <div className='confirmation-buttons'>
          <button className='button-border' onClick={onClickConfirm}>OK</button>
          <button className='button-full' onClick={onClickCancel}>Cancel</button>
        </div>
      </div>
    </div>
  
  )
}

export default ModalConfirmation
