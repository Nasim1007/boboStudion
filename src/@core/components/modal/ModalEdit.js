import React, { useState } from "react"
import { Edit } from "react-feather"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from "reactstrap"

const ModalEdit = ({item}) => {
const [basicModal, setBasicModal] = useState(false)
const [title, setTitle] = useState(item.title)
const [body, setBody] = useState(item.body)
  return (
 
      <div className='basic-modal' style={{margin: 0}}>
        
        <div onClick={() => setBasicModal(!basicModal)}><Edit className='me-10' size={15}/> <span className='align'>Edit</span></div>
   
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>Изменения</ModalHeader>
          <ModalBody>
            <h5>Изменения</h5>
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
      
            <textarea style={{width: "100%", marginTop: "10px", outline: "none", minHeight: "100px"}} value={body} onChange={(e) => setBody(e.target.value)}></textarea>
           
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
              Отменить
            </Button>
            <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
              Изменить
            </Button>
          </ModalFooter>
        </Modal>
      </div>
   
  )
}
export default ModalEdit