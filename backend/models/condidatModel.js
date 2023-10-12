import mongoose from "mongoose";

const condidatSchema = mongoose.Schema({
    nom: {
        type: String,
        require: true,
    },
    prenom: {
        type: String,
        require: true,
    },
    cv: {
        type: String,
        require: true,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    numtel: {
        type: String,
        require: true,
    },
    genre: {
        type: String,
    },
    linkedin: {
        type: String,
        require: true,
    },


}, {
    timestamps: true
});


const Condidat = mongoose.model('Condidat', condidatSchema);
export default Condidat;