import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username:  {
    type: String, 
    required: true, 
    unique:true
},
  password: String,
  email:   String,
  date_joined: { type: Date, default: Date.now },
});


const User = mongoose.model('User', userSchema)
module.exports = User