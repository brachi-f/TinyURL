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
    originalURL: {
        type: String,
        require: true
    },
    clicks: [clickSchema],
    targetParameterName: {
        type: String,
        require: true,
        default: "t"
    },
    targetValues: [mongoose.Schema({
        name: String,
        value: Number
    })]
})


export default mongoose.model('links', linkSchema)