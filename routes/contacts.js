const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.send('admin contacts 이후 url');
});

router.get('/list',(req,res) =>{
    res.send('admin contacts/list 이후 url');
});

module.exports = router;