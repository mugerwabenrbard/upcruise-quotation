import './Datatable.scss'
import {Link} from 'react-router-dom'
import dateFormat from "dateformat";
import axios from 'axios';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const Datatable = ({title, link, data}) => {

  const [show, setShow] = useState(false);
  const [deleteData, setDeleteData] = useState({})

  const handleDelete = (id) => {
    const deleteQuotation = async () =>{
      try {
        const res = await axios.delete('http://localhost:5000/api/quotation/delete/'+ id)
        setDeleteData(res.data)
        setShow(true)     
      } catch (error) {
        console.log(error)
      }
    }
    deleteQuotation()
  }
    
  return (
    <div className="datatable">
      <div className="top">
        <h1 className="title">{title}</h1>
        <Link to={link}>
          <button className="link">Create New</button>
        </Link>
      </div>
      <Toast onClose={() => setShow(false)} className="toast" show={show} delay={3000} autohide>
        <Toast.Body>{deleteData.message}</Toast.Body>
      </Toast>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client Name</th>
            <th>Contact</th>
            <th>Date</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((quotation,index)=>
            <tr key={quotation._id}>
              <td>{index+1}</td>
              <td>{quotation.clientName}</td>
              <td>{quotation.contactPerson}</td>
              <td>{dateFormat((new Date(quotation.createdAt)), 'dd-mm-yyyy , hh:mm:ss TT')}</td>
              <td>{quotation.email}</td>
              <td>
                <div className='cellAction'>
                  <Link to={`/quotations/${quotation._id}`} style={{textDecoration:"none"}}>
                    <div className="viewButton">View</div>
                  </Link>
                  <div className="deleteButton" onClick={()=>handleDelete(quotation._id)}>Delete</div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    
  )
}

export default Datatable