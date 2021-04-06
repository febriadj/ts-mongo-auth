import mongoose, { Schema } from 'mongoose';

const UsersSchema = new Schema({
  username: {
    type: String,
    validate: /[A-Z0-9_-]/gi,
    unique: true,
    required: true
  },
  email: {
    type: String,
    validate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    unique: true,
    required: true
  },
  password: {
    type: String,
    validate: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,24}/,
    required: true
  }
}, { 
  timestamps: true 
})

const Users = mongoose.model('users', UsersSchema);
export default Users;