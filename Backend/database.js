import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("Connected Successfully"))

const jobSchema = new mongoose.Schema({
    company : {
        type : String,
        required : true
    },
    position : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        enum : ["Wishlist", "Applied", "Interviewing", "Offer", "Rejected"]
    },
    dateApplied : {
        type : Date,
        default : Date.now
    }
}) 

const Jobs = mongoose.model("Jobs",jobSchema)

export default Jobs