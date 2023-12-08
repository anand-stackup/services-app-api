const express = require('express')
const Categories = require('../model/model')

exports.create =  (req, res)=> {
    if(!req.body) {
        res.send(400).send({message: 'fields canot be empty'})
        return
    }

    const category = new Categories({
        categoryName: req.body.categoryName,
    })

    category.save(category)
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

        Categories.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send(`cannot find Category with id ${id}`)
                }else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send('cannot find', err)
            })
    }else{
        Categories.find()
        .then(categories => {
            res.send(categories)
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
    Categories.findById(id, req.body)
        .then(data=> {
            if(!data){
                res.status(404).send(`cannot update user with id ${id}`)
            }else{
                res.send(data)
            }
        })
        .catch(err=> {
            res.status(500).send('error updating category', err)
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Categories.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(400).send(`cannot find user with id ${id}`)
            }else{
                res.send('category deleted')
            }
        })
        .catch(err = {
            res
        })
}

