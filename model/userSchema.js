import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        trim : true,
        max : 40,
        min : 3
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
        max : 40,
        min : 3
    },
    username : {
        type : String,
        required : true,
        trim : true,
        unique: true,
        index: true,
        lowercase: true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique: true,
        lowercase : true,

    },
    password :{
        type: String,
        required : true,
    },

    phone : {
        type : String
    }
})

const User = mongoose.model('User', userSchema)

export default User