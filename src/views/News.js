
import AvatarGroup from '@components/avatar-group'
import { Table, Badge, UncontrolledDropdown, DropdownItem, Row, Col  } from 'reactstrap'
import { Edit, Trash } from 'react-feather'
import { useState, useEffect } from 'react'


const News = () => {
    const [news, setNews] = useState([])
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setNews(json))
      }, [])

    return (
        <Table striped responsive>
          <tbody>
         {
         news.map(el =>  <tr onClick={toggle}>

               <td>
                 <span className='align-middle fw-bold'>{el.title}</span>
               </td>
               <td width={300}>
                 <UncontrolledDropdown>
                 <Row>
                     <Col style={{padding: 0, margin: 0}}>
                     <DropdownItem href='/' onClick={e => e.preventDefault()} >
                       <Edit className='me-10' size={15} /> <span className='align'>Edit</span>
                     </DropdownItem>
                     </Col>
                     <Col>
                     <DropdownItem href='/' onClick={e => e.preventDefault()} >
                       <Trash className='me-10' size={15} /> <span className='align-middle'>Delete</span>
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