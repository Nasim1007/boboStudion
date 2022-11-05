
import AvatarGroup from "@components/avatar-group"
import { Table, Badge, UncontrolledDropdown, DropdownItem, Row, Col } from "reactstrap"
import { Edit, Trash } from "react-feather"
import { useState, useEffect } from "react"
import ModalBasic from "../@core/components/modal/ModalBasic"
import ModalConfigDlt from "../@core/components/modal/ModalConfigDlt"
import ModalEdit from "../@core/components/modal/ModalEdit"

const News = () => {
  const [news, setNews] = useState([])
const [basicModal, setBasicModal] = useState(false)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setNews(json))
      }, [])

    return (
        <Table striped responsive>
          <tbody>
         {
         news.map((el) =>  <tr key={el.id} onClick={() => setBasicModal(!basicModal)}>
            <td>
            <ModalBasic item = {el}/>
               </td>
               <td width={300}>
                 <UncontrolledDropdown>
                 <Row>
                     <Col style={{padding: 0, margin: 0}}>
                     <DropdownItem href='/' onClick={e => e.preventDefault()} >
                       {/* <Edit className='me-10' size={15} /> <span className='align'>Edit</span> */}
                       <ModalEdit item={el}/>
                     </DropdownItem>
                     </Col>
                     <Col>
                     <DropdownItem href='/' onClick={e => e.preventDefault()} >
                       <span className='align-middle'><ModalConfigDlt textBtn = "Delete"/></span>
              
                     </DropdownItem>
                  </Col>
                  </Row>
                 </UncontrolledDropdown>
               </td>
             </tr>
         )}
          </tbody>
        </Table>
      )
}
export default News