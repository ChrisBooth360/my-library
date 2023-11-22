const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
})

// Static signup method
userSchema.statics.signup = async function(email, password, firstName, lastName) {
    
    // Validation
    if (!email || !password){
        throw Error('Email and password are required.')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid.')   
    }

    const exists = await this.findOne({email})

    if(exists) {
        throw Error("Email already in use.")
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    
    

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash, firstName, lastName })

    return user
}

// Static login method
userSchema.statics.login = async function(email, password) {
    // Validation
    if (!email || !password){
        throw Error('All fields must be filled.')
    }

    const user = await this.findOne({ email })

    if(!user) {
        throw Error('Your account does not exist.')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)