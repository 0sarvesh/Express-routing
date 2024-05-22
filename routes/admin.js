const express = require('express');

const router = express.Router();
const path = require('path')
const products = []
//admin/addproduct => get
router.get('/add-product',(req,res,next)=>{
    
    res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
   
})
//admin/addproduct => get
router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/')
})


exports.products = products
exports.routes = router