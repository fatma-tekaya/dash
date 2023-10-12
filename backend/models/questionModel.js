import mongoose from "mongoose";

const reponsesSchema = mongoose.Schema({
    reponse: {
        type: String,
        require: true,
    },
    cout: {
        type: Number,
        require: true
    },
    selected: {
        type: Boolean,
        require: true,
    },
}, {
    timestamps: true,
});

const questionSchema = mongoose.Schema({
    question: {
        type: String,
        require: true,
    },
    reponses: [reponsesSchema],
}, {
    timestamps: true
});
const Question = mongoose.model('Question', questionSchema);
export default Question;