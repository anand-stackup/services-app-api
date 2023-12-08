const express = require('express')
const Products = require('../model/productModel')

exports.create =  (req, res)=> {
    if(!req.body) {
        res.send(400).send({message: 'fields canot be empty'})
        return
    }

    const product = new Products({
        categoryId: req.body.categoryId,
        imgurl: req.body.imgurl,
        productName: req.body.productName,
        productDesc: req.body.productDesc,
        price: req.body.price,
    })

    product.save(product)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send('some error occured', err)
        })
}

exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        Products.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send(`cannot find product with id ${id}`)
                }else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send('cannot find', err)
            })
    }else{
        Products.find()
        .then(products => {
            res.send(products)
        })
        .catch(err => {
            res.status(500).send('cannot find data', err)
        })
    }
}
