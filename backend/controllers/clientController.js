import asyncHandler from "express-async-handler"
import Client from '../models/clientModel.js'
import Question from '../models/questionModel.js'
import Projet from "../models/projetModel.js";

/**
 * @desc add client
 *  @route POST /api/client
 *  @methode POST
 *  @acces private
 */

const addClient = asyncHandler(async (req, res) => {
    try {
        const { nom, numtel, email, desc_proj, titre, question, reponses } = req.body;
        const userExists = await Client.findOne({ email });

        if (userExists) {
            const projet = new Projet({
                titre,
                client: userExists._id

            });


            const Nquestion = new Question({
                question: question,
                reponses: reponses
            });

            // console.log(question.titre)
            await Nquestion.save();
            res.status(201).json("question ajouté");
            projet.totalreponse.push(Nquestion);
            await projet.save();
            userExists.projet.push(projet);
            await userExists.save();
            res.status(201).json("projet ajouté");


        }
        else {

            const client = new Client({
                nom,
                numtel,
                email,
                desc_proj
            });

            const projet = new Projet({
                titre,
                client: client._id

            });
            await projet.save();
            client.projet.push(projet);
            await client.save();
            res.status(201).json("client ajouté");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
* @desc  Get   All client
*  @route GET /api/client/
*  @methode GET
*  @acces Private
*/
const getClient = asyncHandler(async (req, res) => {
    const client = await Client.find();
    res.status(200).json(client);
});


export {
    addClient,
    getClient,
}