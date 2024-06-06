// const express =require('express')
import express from 'express';


 
import {getAllUsers, createUser, userlogin, deleteUser , getUserById , updateUser} from '../controller/userController.js';
// const {getAllUsere, createUser, userlogin, deleteUser} =require ('../controller/userController.js');


 

const router = express.Router();

// const { getAllUsere, createUser, userlogin } = require( "../controller/userController");


// router.get('/getAll', (req, res) => {
//     res.send("All usere are here");
// })

router.get('/getAll-data', getAllUsers);

router.post('/create-user', createUser);

router.post('/loginUser', userlogin);

router.get('/getById/:id', getUserById);

router.delete('/Delete/:id', deleteUser);

router.patch('/updateUser/:id', updateUser);



export default router;

// module.exports ={
//     router,
// } 