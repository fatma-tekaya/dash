import asyncHandler from "express-async-handler"
import Condidat from '../models/condidatModel.js'

/**
 * @desc add condidat
 *  @route POST /api/condidat
 *  @methode POSTf
 *  @acces private
 */

const addCondidat = asyncHandler(async (req, res) => {
  try {
    const { nom, prenom, address, email, cv, numtel, genre, linkedin } = req.body;
    const condidat = new Condidat({
      nom,
      prenom,
      address,
      email,
      cv,
      numtel,
      genre,
      linkedin
    });
    console.log(condidat.titre)
    await condidat.save();
    res.status(201).json("condidat ajouté");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
* @desc  Get   All condidat
*  @route GET /api/condidat/
*  @methode GET
*  @acces Private
*/
const getCondidat = asyncHandler(async (req, res) => {
  const condidat = await Condidat.find();
  res.status(200).json(condidat);
});

export {
  addCondidat,
  getCondidat,
}