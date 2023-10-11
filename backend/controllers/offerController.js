import asyncHandler from "express-async-handler"
import Offer from "../models/offerModel.js";



/**
 * @desc add offer
 *  @route POST /api/offer
 *  @methode POST
 *  @acces private
 */

const addOffer= asyncHandler( async (req,res) => {
    try {
       const { titre, desc, dat_pub,date_exp } = req.body;
         const offer = new Offer({
         titre,
          desc,
           dat_pub,
           date_exp
          
       });
       console.log(offer.titre)
        await offer.save();
        res.status(201).json(offer);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
 });

/**
 * @desc  Get   All offer
 *  @route  /api/offer/
 *  @methode GET
 *  @acces Private
 */

const getOffer= asyncHandler( async (req,res) => {
    const offer = await Offer.find();
    
      
    res.status(200).json(offer)});


/**
*  @desc Update  offer
*  @route PUT /api/offer
*  @methode PUT
*  @acces Private
*/

const updateOffer= asyncHandler( async (req, res) => {
    const idToUpdate = req.params.id.trim();

    try {
      const offer = await Offer.findById(idToUpdate);
  
      if (!offer) {
        console.log("offer not found")

        return res.status(404).json({ message: "offer not found" });
      }
    //   if (!ensg) {
    //     return res.status(404).json({ message: 'ensg not found' });
    //   }
      
      const newData = {
        nomOffer: req.body.nomOffer|| offer.nomOffer,

    
      };
    //   const eleve = await Eleve.find();

    //   eleve.forEach( async (element) => {
        
   
   
    //     element.inscription.forEach(function callback(value, index) {
    //       console.log("2")
    //       if(value._id==req.params.id.trim()){
    //         element.inscription.splice(index, 1);
    //       element.inscription.push(formation);
      
           
    //       }
    //     });
    //     element.favorite.forEach(function callback(value, index) {
    //       if(value._id==req.params.id.trim()){
    //         element.favorite.splice(index, 1);
    //         element.favorite.push(formation);


              
     
    //       }
    //     });
    //     await element.save()
    
    //   });
      await offer.set(newData);
 

    await offer.save();
    res.json({ message: 'offer modifié avec succès' });

    } catch (error) {
      res.status(500).json({ message: "Error updating offer", error: error.message });
    }
  });


/**
*  @desc Delete  offer 
*  @route PUT /api/offer/:id
*  @methode delete
*  @acces Private
*/
const deleteOffer = asyncHandler(async (req, res)=> {
  const offerId = req.params.id;

  try {
    const offer = await Offer.findById(offerId);

    if (!offer) {
      return res.status(404).json({ message: 'offer non trouvée' });
    }

    // const eleve = await Eleve.find();
    // eleve.forEach(element => {
      

 
    //   element.inscription.forEach(function callback(value, index) {
    //     if(value._id==formationId){
        
    //       element.inscription.splice(index, 1);
      
    //     }
    //   });
    //   element.favorite.forEach(function callback(value, index) {
    //     if(value._id==formationId){
        
    //       element.favorite.splice(index, 1);

   
    //     }
    //   });
    //   element.save()
  
    // });
    await offer.deleteOne();

    console.log('offer supprimée avec succès');


    res.json({ message: 'offer supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de la offer :', error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de la offer' });
  }



  
});






export{
    addOffer,
    getOffer,
    updateOffer,
    deleteOffer
}