import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const ModalBasic = ({item}) => {
const [basicModal, setBasicModal] = useState(false)

  return (
      <div className='vertically-centered-modal' margin={0}>
        <h4 onClick={() => setBasicModal(!basicModal)}>
         {item.title}
        </h4>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)} className='modal-dialog-centered modal-lg'>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>{item.title}</ModalHeader>
          <ModalBody>
            <img width = "100%" src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="img"/>
            <h5>Check First Paragraph</h5>
           {item.body}
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>

  )
}
export default ModalBasic