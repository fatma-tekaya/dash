import mongoose from "mongoose";

const infoSchema = mongoose.Schema({
    titre: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    adresse: {
        type: String,
        require: true,
    },
    facebook: {
        type: String,
        require: true,
    },
    linkedin: {
        type: String,
        require: true,
    },
    twiter: {
        type: String,
        require: true,
    },
    numtel: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
});



const Info = mongoose.model('Info', infoSchema);
export default Info;