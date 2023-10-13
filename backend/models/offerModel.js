import mongoose from "mongoose";

const offerSchema = mongoose.Schema({
    titre: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    date_pub: {
        type: String,
        require: true,
    },
    date_exp: {
        type: String,
        require: true,
    },

}, {
    timestamps: true
});


const Offer = mongoose.model('Offer', offerSchema);
export default Offer;