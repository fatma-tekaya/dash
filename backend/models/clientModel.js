import  mongoose  from  "mongoose";

const clientSchema  = mongoose.Schema({
    nom:{
        type:String ,
        require: true,
    },
    prenom:{
        type:String ,
        require: true,
    },
    email:{
        type:String ,
        require: true,
        unique:true,
    },
    numtel:{
        type:String ,
        require: true,
    },

},{
    timestamps:true
});


const   Client = mongoose.model('Client',clientSchema);
export default Client;