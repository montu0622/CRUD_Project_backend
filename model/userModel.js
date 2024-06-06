import mongoose from "mongoose";
import bcrypt from "bcrypt"


// const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    // frist_Name : String,

    first_name: {
        type: String,
        required:false
    },
    last_name:{
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },

    email: {
        type: String,
        required:false
    },
    password:{
        type: String,
        required: false
    },
    date_of_birth: {
        type: Date,
        required: false
    },
    contact_number:{
        type: Number,
        required: false
    },
    created_at:{
        type: Date,
        default: new Date()
    },

})

const UserModel = mongoose.model('UserModel', userSchema);


export default UserModel


// module.exports = {
//     UserModel,
// }