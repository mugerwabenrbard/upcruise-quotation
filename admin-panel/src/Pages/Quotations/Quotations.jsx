import axios from 'axios'
import { useEffect, useState } from 'react'
import Datatable from '../../Component/Datatable/Datatable'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './Quotations.scss'

const Quotations = () => {

  const [quotations, setQuotations] = useState([])
  useEffect(() => {
    const quotation = async() =>{
        try {
        const res = await axios.get('http://localhost:5000/api/quotation')
        setQuotations(res.data.data)
      }catch (error) {
        console.log(error)
      }
    } 
    quotation()
  },[quotations])
  
  return (
    <div className='quotations'>
        <Sidebar/>
        <div className="quotationsContainer">
            <Navbar/>
            <Datatable title={'QUOTATIONS'} link={'new'} data={quotations}/>
        </div>
    </div>
  )
}

export default Quotations