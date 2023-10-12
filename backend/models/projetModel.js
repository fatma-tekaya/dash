import mongoose from "mongoose";

const projetSchema = mongoose.Schema({
    titre: {
        type: String,
        require: true,
    },
    totalreponse: [],
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
}, {
    timestamps: true
});
const Projet = mongoose.model('Projet', projetSchema);
export default Projet;