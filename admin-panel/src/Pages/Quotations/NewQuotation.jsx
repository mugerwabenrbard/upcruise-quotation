import { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import axios from 'axios'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './Quotations.scss'
import FlashMessage from 'react-flash-message'

const NewQuotation = () => {

    const [formFields, setFormFields] = useState([
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
        },
    ])

    const [inputs, setInputs] = useState([
        {
            clientName:'',
            contactPerson:'',
            phone:'',
            email:'',
            address:'',
            trip: [],
            contactPersonSupplier:'',
            notice:'',
            termsOfPayment:'',
            currency:'',
            beneficiary:'',
        }
    ])
    const [response, setResponse] = useState('')
    const handleChange = (e,index) => {
        let data = [...formFields]
        data[index][e.target.name] = e.target.value
        setFormFields(data)
        setInputs({...inputs, trip:formFields})
    }

    const handleInput = (e,i) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }

    const submit = (e) =>{
        e.preventDefault()
        const quotation = async () => {
            try {
                const res = await axios.post('http://localhost:5000/api/quotation', inputs)
                console.log(res)
                // setResponse(res.message)
                // window.location.reload()
            } catch (error) {
                setResponse(error.message)
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
        setFormFields([...formFields,obj])
    }

    const removeRow = (index) =>{
        let data = [...formFields]
        data.splice(index,1)
        setFormFields(data)
    }
  return (
    <div className='newQuotation'>
        <Sidebar/>
        <div className="newQuotationContainer">
            <Navbar/>
            <div className="top">
            <h1 style={{textAlign:"center", marginBottom:"20px"}}>Create New Quotation</h1>
            <FlashMessage duration={5000} persistOnHover={true}>
                <p>{response}</p>
            </FlashMessage>
            </div>
            <div className="bottom">
                    <form className='wrapper' onSubmit={(e)=>submit(e)}>
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
                            {formFields.map(
                                (field,index)=>{
                                    return(
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
                                                <label>Liters</label>
                                                <input type="number" name='fuelMeasure' placeholder='Liters' onChange={e=>handleChange(e,index)} value={field.fuelMeasure}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="formInput">
                                                <label>Fuel UOM</label>
                                                <input type="text" name='fuelUOM' placeholder='Measurement' onChange={e=>handleChange(e,index)} value={field.fuelUOM}/>
                                            </div>
                                            <div className="formInput">
                                                <label>Fuel Cost/ Liter</label>
                                                <input type="number" name='fuelUnitCost' placeholder='Cost of 1 Liter' onChange={e=>handleChange(e,index)} value={field.fuelUnitCost}/>
                                            </div>
                                            <div className="formInput">
                                                <label>Car Consupmtion(KM/L)</label>
                                                <input type="number" name='carConsumption' placeholder='Kilometers/ Litre' onChange={e=>handleChange(e,index)} value={field.carConsumption}/>
                                            </div>
                                        </div>
                                        {index>0 && <div onClick={()=>removeRow(index)} className='removeRow'>Remove</div>}
                                    </div>
                                    )
                                }
                            )}
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
                        <button className='submit'>CREATE</button>
                    </form>
            </div>
        </div>
        
    </div>
  )
}

export default NewQuotation