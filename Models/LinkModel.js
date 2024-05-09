import mongoose from "mongoose"

const clickSchema = mongoose.Schema({
    insertedAt: {
        type: Date,
        default: Date.now
    },
    ipAddress: {
        type: String,
        required: true
    }
})

const linkSchema = mongoose.Schema({
    originalURL:{
        type: String,
        require: true
    },
    clicks: [clickSchema]
})


export default mongoose.model('links', linkSchema)