import asyncHandler from "express-async-handler"
import Condidat from '../models/condidatModel.js'
import generateToken   from "../utils/generateToken.js";
import Formation from "../models/formationModel.js";
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import fs from 'fs';
import Ensg from "../models/ensgModel.js";


/**
 * @desc Ajouter Note
 *  @route  /api/eleve/note/:formationId/:coursId
 *  @methode Post
 *  @acces Private
 */

  async function ajoutNoteQuiz(req, res) {
    const { formationId, coursId } = req.params;
    eleve.inscription.forEach(function callback(value, index) {
      
        if(value._id==formationId){

        value.cours.forEach(function callback(value, index) {
          if(value._id==coursId){   
            value.quiz.note="7"
            }
        
        });
        }
      });
 

  
       const updatedEleve=await eleve.save();
  
      res.status(500).json({ message:updatedEleve});

  }


export{
  modifyPassword,
  writeNewPassword,
  resetPassword,
  verifyUser,
  deleteEleve,
  ajoutNoteQuiz,
    nouvelleInscription,
    getEleveById,
    authUser,
    updateUserProfile,
    logoutUser,
    registerUser,
    getUserProfile,
    getAllEleves,
    addFavoriteFormation,
    DemanderRendezVous
    

}