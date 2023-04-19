import mongoose from "mongoose";

const Register = new mongoose.Schema({
    email: String,
    password: String,
});

const UserModel = mongoose.models.UserData || mongoose.model('UserData', Register);

export default UserModel;