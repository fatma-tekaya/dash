import asyncHandler from "express-async-handler"
import Offer from "../models/offerModel.js";

/**
 * @desc add offer
 *  @route POST /api/offer
 *  @methode POST
 *  @acces private
 */

const addOffer = asyncHandler(async (req, res) => {
    try {
        const { titre, desc, date_pub, date_exp } = req.body;
        const offer = new Offer({
            titre,
            desc,
            date_pub,
            date_exp

        });
        // console.log(offer.titre)
        await offer.save();
        res.status(201).json("offer ajouté");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * @desc  Get   All offer
 *  @route GET /api/offer/
 *  @methode GET
 *  @acces Private
 */
const getOffer = asyncHandler(async (req, res) => {
    const offer = await Offer.find();
    res.status(200).json(offer)
});

/**
*  @desc Update  offer
*  @route PUT /api/offer/:id
*  @methode PUT
*  @acces Private
*/
const updateOffer = asyncHandler(async (req, res) => {
    const idToUpdate = req.params.id.trim();
    //console.log(idToUpdate);
    try {

        const offer = await Offer.findById(idToUpdate);
        if (!offer) {
            console.log("offer not found")

            return res.status(404).json({ message: "offer not found" });
        }
        console.log(offer.titre);
        const newData = {
            titre: req.body.titre || offer.titre,
            desc: req.body.desc || offer.desc,
            date_pub: req.body.date_pub || offer.date_pub,
            date_exp: req.body.date_exp || offer.date_exp,
        };
        await offer.set(newData);
        await offer.save();
        res.json({ message: 'offer modifié avec succès' });

    } catch (error) {
        res.status(500).json({ message: "Error updating offer", error: error.message });
    }
});

/**
*  @desc Delete  offer 
*  @route DELETE /api/offer/:id
*  @methode DELETE
*  @acces Private
*/
const deleteOffer = asyncHandler(async (req, res) => {
    const offerId = req.params.id;

    try {
        const offer = await Offer.findById(offerId);

        if (!offer) {
            return res.status(404).json({ message: 'offer a supprimer est non trouvée' });
        }
        await offer.deleteOne();
        console.log('offer supprimée avec succès');
        res.json({ message: 'offer supprimée avec succès' });
    } catch (error) {
        console.error('Erreur lors de la suppression de la offer :', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de la offer' });
    }

});

export {
    addOffer,
    getOffer,
    updateOffer,
    deleteOffer
}