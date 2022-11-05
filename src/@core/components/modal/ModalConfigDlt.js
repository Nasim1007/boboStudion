import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const ModalConfigDlt = ({textBtn}) => {
const [basicModal, setBasicModal] = useState(false)
  return (
 
      <div className='basic-modal' style={{margin: 0}}>
        <Button color='danger' onClick={() => setBasicModal(!basicModal)}>
         {textBtn}
        </Button>
        {/* <span className='align-middle' onClick={() => setBasicModal(!basicModal)}>  {textBtn}</span> */}
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>Подтверждение</ModalHeader>
          <ModalBody>
            <h5>Подтверидите удалить?</h5>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
              Отменить
            </Button>
            <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
              Удалить
            </Button>
          </ModalFooter>
        </Modal>
      </div>
   
  )
}
export default ModalConfigDlt