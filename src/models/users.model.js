import mongoose from "mongoose";

const userCollection = "users";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nacionalidad: {
        type: String,
        required: true,
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "orders"
        }
    ]
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;


