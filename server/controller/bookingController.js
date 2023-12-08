const express = require('express')
const Booking = require('../model/bookingModel')

exports.create =  (req, res)=> {
    if(!req.body) {
        res.send(400).send({message: 'fields canot be empty'})
        return
    }

    const booking = new Booking({
        date: req.body.date,
        slot: req.body.slot,
        productName: req.body.productName,
        status: req.body.status,
    })

    booking.save(booking)
        .then(data => {
            res.send(data)
        })
}

exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        Booking.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send(`cannot find booking with id ${id}`)
                }else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send('cannot find', err)
            })
    }else{
        Booking.find()
        .then(booking => {
            res.send(booking)
        })
        .catch(err => {
            res.status(500).send('cannot find data', err)
        })
    }

}

exports.update =(req, res) =>{
    if(!req.body){
        return res
            .status(400).send('data cannot be updated')
    }

    const id = req.params.id;
    Booking.findByIdAndUpdate(id, req.body)
        .then(data=> {
            if(!data){
                res.status(404).send(`cannot update booking with id ${id}`)
            }else{
                res.send(data)
            }
        })
}