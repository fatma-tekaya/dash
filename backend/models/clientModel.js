import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
    nom: {
        type: String,
        require: true,
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
    desc_proj: {
        type: String,
        require: true,
    },
    projet: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Projet' }], // Propriété de référence aux cours associés


}, {
    timestamps: true
});


const Client = mongoose.model('Client', clientSchema);
export default Client;