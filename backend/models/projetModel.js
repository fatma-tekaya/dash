import mongoose from "mongoose";
const questionsSchema = mongoose.Schema({

    question: {
        type: String,
        require: true,

    },
    reponses: {
        type: String,
        require: true
    },
    cout:{
        type:Number,
        require:ture
    }

}, {
    timestamps: true,
});

const projetSchema = mongoose.Schema({
    titre: {
        type: String,
        require: true,
    },
    questions: [questionsSchema],
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
}, {
    timestamps: true
});
const Projet = mongoose.model('Projet', projetSchema);
export default Projet;