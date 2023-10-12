import asyncHandler from "express-async-handler"
import Client from '../models/clientModel.js'

/**
 * @desc add client
 *  @route POST /api/client
 *  @methode POST
 *  @acces private
 */

const addClient = asyncHandler(async (req, res) => {
    try {
        const { nom, numtel, email, desc_proj,projet } = req.body;
        const client = new Client({
            nom,
            numtel,
            email,
            desc_proj,
            
        });
        console.log(client.titre)
        await client.save();
        res.status(201).json("client ajouté");
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