import UserModel from "../model/userModel.js";
import bcrypt from "bcrypt";

import  Jwt  from "jsonwebtoken";



// const UserModel = require ('../model/userModel');



const createUser =  async (req, res) => {
   const user = req.body;
   const newUser = UserModel(user);
   const username = req.body.username;

  

   // console.log(user);
   // console.log("user==>", newUser);
   
  

   try {
       await newUser.save();

       const userNameExits = req.body.username;

       const result = await  UserModel.findOne({
         username:username,
       })

       if(userNameExits === result){
         res.status(200).json({
            message:"username already exist",
         })
       } 

       const  emailExist = await UserModel.findOne({
         email:email
       })

       if(emailExist){
         res.status(200).json({
            message:`Email All ready Exist ${emailExist}`
         })
       }

       
         const HandlePassword = await bcrypt.hash(password, 10);
         newUser.password = hashedPassword;

         


       

       return  res.status(201).json({
            message: "user create succefully",
            result: newUser,
         });
   
      
   //  console.log(user,"====user");
   //  console.log(username,"=======================username");
   }
   catch (err) {
      res.status(409).json({
         message: err.message,
      });
      console.log(err.message);
   }
};


const userlogin = async (req, res) => {
 
   const SECRET_KEY = '8b1224cb5e518f4d05bbe4241082a0c4'
   const email = req.body.email;
   const password = req.body.password;

   try {


      const user = await UserModel.findOne({
         email: email,

      
      });

      if (!user) {
         return res.status(400).json({
            message: "Email not exits",
         })
      }
         const isPasswordValid = await bcrypt.compare(password, user.password);
         if(!isPasswordValid){
            return res.status(200).json({
               message:'Invalid credential'
            })
         }
         const token = jwt.sign({email, password}, SECRET_KEY);
         res.status(200).json({
            message:"Login Succefully",
            auth:token
         });
    
        } catch (err) {
      res.status(404).json({
         message: err.message,
      });

   }
}



// const getAllUsers = async (req, res) => {

//    try {

//       const user = await UserModel.find({});
//       console.log(user, 'user');
//       return res.status(200).json({
//          message: "fatched succefully",
//          // result: res
//          result: user,
//       })
//       console.log("res from get all user===>", res.result);

//    } catch (err) {
//       return res.status(402).json({
//          message: "sameting is wrong",
//       });
//       // console.log(err.message);
//    }
// };

const getAllUsers = async (req, res) => {
   try {
      const user = await UserModel.find({});
      return res.status(200).json({
         message: "Users fetched",
         result: user
      })
      // console.log(user, "user");
   }
   catch (err) {
      return res.status(400).json({
         message: err.message
      })
   }
}


const getUserById = async (req, res) => {

   const id = req.params._id

   try {
      const user = await UserModel.findOne({
         _id: id,
      })
      return res.status(201).json({
         message: "Users fetched by Id",
         result: user
      })
   } catch (err) {

       res.status(400).json({
         message: err.message
      })

   }
}


const deleteUser = async (req, res) => {
   const id = req.params.id;
   try {
      const userdeleted = await UserModel.deleteOne({
         _id: id,
      });


      // if (!userdeleted)   {
      //    return res.status(400).json({
      //       message: " given id is not found",

      //    });
      // }
      res.status(202).json({
         message: 'user deleted succefully',
         result: res.result,

      })
      console.log(id);

   }
   catch (err) {
      return res.status(404).json({
         message: err.message,
         message: "samething wronge"

      })
   }
}


const updateUser = async (req, res) => {
   const id = req.params.id;
   const editUser = req.body;
 

   try {
      const result = await UserModel.findByIdAndUpdate(id, editUser);
      return res.status(200).json({
         message: "user Updated succefully",
         result: editUser,
      })
   } catch (err) {
      res.status(404).json({
         message: err.message,
      })
   }
}


// module.exports ={
//    createUser,
//    getAllUsere,
//    userlogin,
//    deleteUser

// };

export { getAllUsers, userlogin, createUser, deleteUser, getUserById, updateUser };

// createUser