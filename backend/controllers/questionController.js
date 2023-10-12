import asyncHandler from "express-async-handler"
import Question from "../models/questionModel.js";

/**
 * @desc add question
 *  @route POST /api/question
 *  @methode POST
 *  @acces private
 */

const addQuestion = asyncHandler(async (req, res) => {
    try {
        const { quest,rep} = req.body;
        const question = new Question({
            quest,rep

        });
        // console.log(question.titre)
        await question.save();
        res.status(201).json("question ajouté");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * @desc  Get   All question
 *  @route GET /api/question/
 *  @methode GET
 *  @acces Private
 */
const getQuestion = asyncHandler(async (req, res) => {
    const question = await Question.find();
    res.status(200).json(question)
});

/**
*  @desc Update  question
*  @route PUT /api/question/:id
*  @methode PUT
*  @acces Private
*/
const updateQuestion = asyncHandler(async (req, res) => {
    const idToUpdate = req.params.id.trim();
    //console.log(idToUpdate);
    try {

        const question = await Question.findById(idToUpdate);
        if (!question) {
            console.log("question not found")

            return res.status(404).json({ message: "question not found" });
        }
        console.log(question.titre);
        const newData = {
            titre: req.body.titre || question.titre,
            desc: req.body.desc || question.desc,
            date_pub: req.body.date_pub || question.date_pub,
            date_exp: req.body.date_exp || question.date_exp,
        };
        await question.set(newData);
        await question.save();
        res.json({ message: 'question modifié avec succès' });

    } catch (error) {
        res.status(500).json({ message: "Error updating question", error: error.message });
    }
});

/**
*  @desc Delete  question 
*  @route DELETE /api/question/:id
*  @methode DELETE
*  @acces Private
*/
const deleteQuestion = asyncHandler(async (req, res) => {
    const questionId = req.params.id;

    try {
        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'question a supprimer est non trouvée' });
        }
        await question.deleteOne();
        console.log('question supprimée avec succès');
        res.json({ message: 'question supprimée avec succès' });
    } catch (error) {
        console.error('Erreur lors de la suppression de la question :', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de la question' });
    }

});

export {
    addQuestion,
    getQuestion,
    updateQuestion,
    deleteQuestion
}