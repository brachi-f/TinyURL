import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        require: true
    },
    links: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'links'
    }]
})

export default mongoose.model('users', userSchema)