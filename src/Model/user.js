import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    member : {
        orderId :{
            type: String
        },
        ismember:{
            type: Boolean,
            default: false
        },
    }

})

const user = mongoose.models.user || mongoose.model("user", userSchema);

export default user;