import mongoose from "mongoose"

const linkSchema = mongoose.Schema({
    originalURL:{
        type: String,
        require: true
    }
})


export default mongoose.model('links', linkSchema)