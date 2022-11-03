const Quotations = require('../Models/Quotations')

const router = require('express').Router()

// get all

router.get('/', async(req,res)=>{
    try {
        const data = await Quotations.find().sort({createdAt: -1})
        res.send({status:"SUCCESSFUL", data:data})
    } catch (error) {
        res.send({status:"FAILED", message:'No Quotations Found'})
    }
})
// Add new
router.post('/', async(req,res)=>{
    // res.send(req.body.clientName)
    try {

        const quotation = new Quotations({
            clientName:req.body.clientName,
            contactPerson:req.body.contactPerson,
            phone:req.body.phone,
            email:req.body.email,
            address:req.body.address,
            trip:req.body.trip,
            contactPersonSupplier:req.body.contactPersonSupplier,
            notice:req.body.notice,
            termsOfPayment:req.body.termsOfPayment,
            currency:req.body.currency,
            beneficiary:req.body.beneficiary,
        })
        const saveQuotation = await quotation.save()
        res.send({status:"SUCCESSFUL", data:saveQuotation, message:'Quotation saved Successfully'})
    } catch (error) {
        res.send({status:"Failed", data:error, message:'Quotation Failed Save'})
    }
})
// Find Single
router.get('/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const quotation = await Quotations.findById(id)
        res.send(quotation)
    } catch (error) {
        res.send({status:'FAILED', message:"No Quotation found with this ID"})
    }
    
})

// Update quotation
router.post('/update/:id', async(req,res)=>{
    const id = req.body._id
    clientName = req.body.clientName,
    contactPerson = req.body.contactPerson,
    phone = req.body.phone,
    email = req.body.email,
    address = req.body.address,
    trip = req.body.trip,
    contactPersonSupplier = req.body.contactPersonSupplier,
    notice = req.body.notice,
    termsOfPayment = req.body.termsOfPayment,
    currency = req.body.currency,
    beneficiary = req.body.beneficiary
    
    Quotations.findByIdAndUpdate(id,{$set:{
        clientName : clientName,
        contactPerson : contactPerson,
        phone : phone,
        email : email,
        address : address,
        trip : trip,
        contactPersonSupplier : contactPersonSupplier,
        notice : notice,
        termsOfPayment : termsOfPayment,
        currency : currency,
        beneficiary : beneficiary
    }}, {new:true}, (err,quotation)=>{
        if(err) return res.send({message:"Quotation Failed Update"})

        res.send({data:quotation, message:"Quotation Updated Successfully"})
    })
})

// Delete Quotation
router.delete('/delete/:id', async(req,res)=>{
    try {
        const deleted = await Quotations.findByIdAndRemove(req.params.id)
        res.send({status: "SUCCESSFUL", message:"Quotation Deleted Successfully"})
    } catch (error) {
        res.send({status: "FAILED", message:"Quotation Deleting Failed"})
    }
})


module.exports = router