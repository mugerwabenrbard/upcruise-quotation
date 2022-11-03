import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './Quotations.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const SingleQuotation = () => {

  const [inputs, setInputs] = useState([
    {
        clientName:'',
        contactPerson:'',
        phone:'',
        email:'',
        address:'',
        trip: [
          {
            desc:"",
            measure:"",
            UOM:"",
            unitCost:"",
            fuelDesc:"",
            fuelMeasure:"",
            fuelUOM:"",
            fuelUnitCost:"",
            carConsumption: ""
        }
        ],
        contactPersonSupplier:'',
        notice:'',
        termsOfPayment:'',
        currency:'',
        beneficiary:'',
    }
])
const id = useParams()
useEffect(() => {
  const quotation = async() =>{
    const res = await axios(`http://localhost:5000/api/quotation/${id.productId}`)
    setInputs([{...res.data}])
  }
  quotation()
}, [])


const handleChange = (e,index) => {
    let data = [...inputs[0].trip]
    data[index][e.target.name] = e.target.value
    setInputs([{...inputs[0], trip:data}])
}

const handleInput = (e,i) => {
    setInputs([{...inputs[0], [e.target.name]:e.target.value}])
}
const navigate = useNavigate()

const Submit = (e) =>{
    e.preventDefault()
    const quotation = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/api/quotation/update/${id}`, inputs[0])
            setInputs([{...res.data.data}])
            navigate(`/quotations/print/${inputs[0]._id}`)
        } catch (error) {
            console.log(error.message)
        }
        
    }

    quotation()
}

const handleClick = () =>{
    let obj = {
        desc:"",
        measure:"",
        UOM:"",
        unitCost:"",
        fuelDesc:"",
        fuelMeasure:"",
        fuelUOM:"",
        fuelUnitCost:"",
        carConsumption: ""
    }
    setInputs([{...inputs[0], trip:[...inputs[0].trip,obj]}])
}

const removeRow = (index) =>{
    let data = [...inputs[0].trip]
    data.splice(index,1)
    setInputs([{...inputs[0],trip:data}])
}
return (
<div className='newQuotation'>
    <Sidebar/>
    <div className="newQuotationContainer">
        <Navbar/>
        <div className="top">
        <h1 style={{textAlign:"center", marginBottom:"20px"}}>Update Quotation</h1>
        </div>
        <div className="bottom">
          <form>
                  {inputs.map((inputs,index)=>
                        <div key={index} className="wrapper">

                        <div className="formInput">
                        <label>Client Name</label>
                        <input type="text" name='clientName' required placeholder='John Doe' onChange={(e,i)=>handleInput(e,i)} value={inputs.clientName}/>
                    </div>
                    <div className="formInput">
                        <label>Contact Person</label>
                        <input type="text" name='contactPerson' placeholder='John Doe' onChange={(e,i)=>handleInput(e,i)} value={inputs.contactPerson}/>
                    </div>
                    <div className="formInput">
                        <label>Phone</label>
                        <input type="number" name='phone' placeholder='+256 234567890' onChange={(e,i)=>handleInput(e,i)} value={inputs.phone}/>
                    </div>
                    <div className="formInput">
                        <label>Email</label>
                        <input type="email" name='email' required placeholder='johndoe@email.com' onChange={(e,i)=>handleInput(e,i)} value={inputs.email}/>
                    </div>
                    <div className="formInput">
                        <label>Address</label>
                        <input type="text" name='address' placeholder='Naalya Quality Supermarket Road' onChange={(e,i)=>handleInput(e,i)} value={inputs.address}/>
                    </div>
                    <div className="tripDetails">
                        {inputs.trip.map(
                            (field,index)=>
                                <div key={index} style={{marginBottom:"10px"}}>
                                    <h4 style={{width:"100%", backgroundColor:"#000034", color: "white", textAlign:"center"}}>Trip {index+1} Details</h4>
                                    <div className="row">
                                        <div className="formInput">
                                            <label>Description</label>
                                            <input type="text" name='desc' placeholder='Description' onChange={e=>handleChange(e,index)} value={field.desc} required/>
                                        </div>
                                        <div className="formInput">
                                            <label>Days/ Hours</label>
                                            <input type="number" name='measure' placeholder='Days/ Hours' onChange={e=>handleChange(e,index)} value={field.measure} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="formInput">
                                            <label>Unit Of Measurement</label>
                                            <input type="text" name='UOM' placeholder='Trip/ KM' onChange={e=>handleChange(e,index)} value={field.UOM} required/>
                                        </div>
                                        <div className="formInput">
                                            <label>Unit Cost</label>
                                            <input type="number" name='unitCost' placeholder='Unit Cost' onChange={e=>handleChange(e,index)} value={field.unitCost} required/>
                                        </div>
                                    </div>
                                    <h4 style={{marginTop:'10px'}}>Fuel (Optional)</h4>
                                    <div className="row">
                                        <div className="formInput">
                                            <label>Description</label>
                                            <input type="text" name='fuelDesc' placeholder='Fuel Description' onChange={e=>handleChange(e,index)} value={field.fuelDesc}/>
                                        </div>
                                        <div className="formInput">
                                            <label>Kilometers</label>
                                            <input type="number" name='fuelMeasure' placeholder='Kilometers' onChange={e=>handleChange(e,index)} value={field.fuelMeasure}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="formInput">
                                            <label>Fuel UOM</label>
                                            <input type="text" name='fuelUOM' placeholder='Measurement' onChange={e=>handleChange(e,index)} value={field.fuelUOM}/>
                                        </div>
                                        <div className="formInput">
                                            <label>Cost/ Liter Fuel</label>
                                            <input type="number" name='fuelUnitCost' placeholder='Cost of 1 Liter' onChange={e=>handleChange(e,index)} value={field.fuelUnitCost}/>
                                        </div>
                                        <div className="formInput">
                                            <label>Car Consupmtion(KM/L)</label>
                                            <input type="number" name='carConsumption' placeholder='Kilometers/ Litre' onChange={e=>handleChange(e,index)} value={field.carConsumption}/>
                                        </div>
                                    </div>
                                    <div onClick={()=>removeRow(index)} className='removeRow'>Remove</div>
                                </div>
                                )
                            }
                    </div>
                    <div className="bottom">
                        <span className="addrow" onClick={handleClick}>Add Trip</span>
                    </div>
                    <div className="formInput">
                        <label>Contact Person</label>
                        <input type="text" name='contactPersonSupplier' required placeholder='Upcruise Car Rental' onChange={(e,i)=>handleInput(e,i)} value={inputs.contactPersonSupplier}/>
                    </div>
                    <div className="formInput">
                        <label>Currency</label>
                        <input type="text" required name='currency' placeholder='UGX' onChange={(e,i)=>handleInput(e,i)} value={inputs.currency}/>
                    </div>
                    <div className="formInput">
                        <label>Notice</label>
                        <textarea rows="3" name='notice' value={inputs.notice} onChange={(e,i)=>handleInput(e,i)}></textarea>
                    </div>
                    <div className="formInput">
                        <label>Terms Of Payment</label>
                        <textarea rows="3" value={inputs.termsOfPayment} name='termsOfPayment' onChange={(e,i)=>handleInput(e,i)}></textarea>
                    </div>
                    <div className="formInput">
                        <label>Beneficiary</label>
                        <textarea rows="3" name='beneficiary' value={inputs.beneficiary} onChange={(e,i)=>handleInput(e,i)}></textarea>
                    </div>
                        </div>
                    )}
                    
                    <button className='submit' onClick={e=>Submit(e)}>UPDATE</button>
                  </form>
        </div>
    </div>
    
</div>
)
}

export default SingleQuotation