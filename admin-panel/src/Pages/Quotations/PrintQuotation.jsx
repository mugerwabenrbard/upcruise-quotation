import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import './Quotations.scss'
import { useReactToPrint } from 'react-to-print';
import { createRef, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import dateFormat from "dateformat";
import { numToWords } from 'num-to-words';


const PrintQuotation = () => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: ()=>componentRef.current,
        documentTitle: 'quotation',
        // onAfterPrint: ()=>alert('Printed Successfully'),        
    })

    const id = useParams()
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
    useEffect(()=>{
        const quotation = async() =>{
            const res = await axios(`http://localhost:5000/api/quotation/${id.id}`)
            setInputs([{...res.data}])
            // const sum = inputs[0].trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0)

            // setTax(0.18 * subtotal)

            // const fuelSum = inputs[0].trip.reduce((prev,curr)=>prev + ((curr.fuelMeasure * curr.fuelUnitCost)/curr.carConsumption), 0)

          }
          quotation()
    },[])

    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate(`/quotations/${id.id}`)
    }
  return (
    <div className='printQuotation'>
        <Sidebar/>
        <div className="printQuotationContainer">
            <Navbar/>
            <div className="printArea">
                <div className="buttons">
                    <button onClick={handlePrint} className='print'>PRINT</button>
                    <button onClick={handleRedirect} className='print'>EDIT</button>
                </div>
                {inputs.map((quotation,index)=>
                    <div ref={componentRef} key={index} style={{margin:'20px', height:'100%'}}>
                        <div>
                            <img src={"/images/headerUpcruise.jpg"} alt="Upcruise car rental page header" className="img" style={{height:'150px'}} />
                        </div>
                        <div className="body">
                            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                <div>
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>CLIENT: <span style={{fontWeight:'400'}}>{quotation.clientName}</span></p>
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>ADDRESS: <span style={{fontWeight:'400'}}>{quotation.address}</span></p>
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>PHONE: <span style={{fontWeight:'400'}}>{quotation.phone}</span></p>
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>EMAIL: <span style={{fontWeight:'400'}}>{quotation.email}</span></p>
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>CONTACT PERSON: <span style={{fontWeight:'400'}}>{quotation.contactPerson}</span></p>
                                </div>
                                <div className="right">
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>DATE: <span style={{fontWeight:'400'}}>{dateFormat((Date.now()), 'dd/mm/yyyy , hh:mm:ss TT')}</span></p>
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>QUOTATION ID: <span style={{fontWeight:'400'}}>UP-{(Math.floor(Math.random() * 10000) + 10000).toString().substring(1)}</span></p>
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>CURRENCY: <span style={{fontWeight:'400'}}>{quotation.currency}</span></p>
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>TIN: <span style={{fontWeight:'400'}}>1012496073</span></p>
                                    <p style={{marginBottom: '10px', fontWeight:'bold'}}>CONTACT PERSON: <span style={{fontWeight:'400'}}>{quotation.contactPersonSupplier}</span></p>
                                </div>
                            </div>
                            <div className="tripDetails">
                                <h1 style={{textAlign:'center', marginBottom:'10px'}}>PRICE QUOTATION</h1>
                                <table style={{width:'100%', border:'2px solid #000034',borderCollapse:'collapse', marginBottom:'10px'}}>
                                    <thead>
                                        <tr>
                                            <th style={{border:'2px solid #000034', textAlign:'left', height:'3rem', padding:'0 5px'}}>ID</th>
                                            <th style={{border:'2px solid #000034', textAlign:'left', height:'3rem', padding:'0 5px'}}>DESCRIPTION</th>
                                            <th style={{border:'2px solid #000034', textAlign:'left', height:'3rem', padding:'0 5px'}}>QUANTIY</th>
                                            <th style={{border:'2px solid #000034', textAlign:'left', height:'3rem', padding:'0 5px'}}>UOM</th>
                                            <th style={{border:'2px solid #000034', textAlign:'left', height:'3rem', padding:'0 5px'}}>UNIT COST</th>
                                            <th style={{border:'2px solid #000034', textAlign:'left', height:'3rem', padding:'0 5px'}}>SUB TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {quotation.trip.map((trip,index)=>
                                        <tr key={index}>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{index+1}</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{trip.desc}</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{trip.measure}</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{trip.UOM}</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', xheight:'2rem', padding:'0 5px'}}>{(trip.unitCost).toLocaleString()}</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{(trip.measure * trip.unitCost).toLocaleString()}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan='5' style={{fontWeight:'bold', textAlign:'right', fontSize:'16px',border:'2px solid #000034', padding:'10px'}}>SUBTOTAL (WITHOUT FUEL)</td>
                                        <td style={{fontWeight:'300', textAlign:'left', fontSize:'16px',border:'2px solid #000034', padding:'10px'}}>{(quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0)).toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan='5' style={{fontWeight:'bold', textAlign:'right', fontSize:'16px',border:'2px solid #000034', padding:'10px'}}>TAX</td>
                                        <td style={{fontWeight:'300', textAlign:'left', fontSize:'16px',border:'2px solid #000034', padding:'10px'}}>{(Math.floor((quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0))*0.18)).toLocaleString()}</td>
                                    </tr>
                                    {quotation.trip[0].fuelMeasure || quotation.trip[0].carConsumption || quotation.trip[0].fuelUnitCost !== "" && <tr> <td colSpan='6' style={{fontWeight:'bold', textAlign:'center', fontSize:'20px', padding:'10px'}}>FUEL</td></tr>}
                                    
                                    {quotation.trip.map((trip,index)=>
                                        {trip.fuelMeasure || trip.carConsumption || trip.fuelUnitCost !== "" && <tr key={index}>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{index+1}</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{trip.fuelDesc}</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{(trip.fuelMeasure).toLocaleString()} KM</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{trip.fuelUOM}</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{(trip.fuelUnitCost).toLocaleString()}</td>
                                            <td style={{border:'2px solid #000034', textAlign:'left', height:'2rem', padding:'0 5px'}}>{(Math.floor((trip.fuelMeasure*trip.fuelUnitCost)/trip.carConsumption)).toLocaleString()}</td>
                                        </tr>}
                                    )}
                                    </tbody>
                                </table>
                                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                    <div style={{flex:2}}>
                                        <p style={{fontWeight:'bold'}}>AMOUNT IN WORDS</p>
                                        <p style={{marginBottom:'10px'}}>{numToWords(
                                            quotation.trip[0].fuelMeasure || quotation.trip[0].carConsumption || quotation.trip[0].fuelUnitCost === "" ? 
                                            Math.floor(
                                            ((quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0))*0.18)+
                                            (quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0))): 
                                                Math.floor((quotation.trip.reduce((prev,curr)=>prev + ((curr.fuelMeasure * curr.fuelUnitCost)/curr.carConsumption), 0))+
                                                (((quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0))*0.18))+
                                                (quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0)))
                                            )} Uganda shillings only</p>

                                        <p style={{fontWeight:'bold'}}>NB</p>
                                        <p style={{whiteSpace:'pre-wrap', wordWrap: 'break-word', marginBottom:'10px'}}>
                                            {quotation.notice}
                                        </p>

                                        <p style={{fontWeight:'bold'}}>TERMS OF PAYMENT</p>
                                        <p style={{whiteSpace:'pre-wrap', wordWrap: 'break-word', marginBottom:'10px'}}>
                                            {quotation.termsOfPayment}
                                        </p>
                                    </div>
                                    <div style={{flex:1}}>
                                        <p style={{fontWeight:'bold', fontSize:'20px', marginBottom:'10px', borderBottom:'1px solid lightgray', padding:'10px 0'}}>TOTAL: <span style={{fontWeight:'400'}}>UGX.{quotation.trip[0].fuelMeasure || quotation.trip[0].carConsumption || quotation.trip[0].fuelUnitCost === "" ? 
                                        (Math.floor(
                                        ((quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0))*0.18)+
                                        (quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0)))).toLocaleString() : 
                                            (Math.floor((quotation.trip.reduce((prev,curr)=>prev + ((curr.fuelMeasure * curr.fuelUnitCost)/curr.carConsumption), 0))+
                                            (((quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0))*0.18))+
                                            (quotation.trip.reduce((prev,curr)=>prev + (curr.measure * curr.unitCost), 0)))).toLocaleString() }</span></p>
                                        <p style={{fontWeight:'bold'}}>BENEFICIARY</p>
                                        <p style={{whiteSpace:'pre-wrap', wordWrap: 'break-word'}}>
                                            {quotation.beneficiary}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="header">
                            <img src={"/images/footerUpcruise.jpg"} alt="Upcruise car rental page header" style={{height:'90px'}} />
                        </div>
                    </div>     
                )}
            </div>
        </div>
    </div>
  )
}

export default PrintQuotation