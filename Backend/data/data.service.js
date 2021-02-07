const jwt = require('_helpers/jwt');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('config.json');
const db = require('_helpers/db');
const data = db.data;




module.exports = {
    getClassi,
    getHomeData,
    getType
};



async function getClassi(){
    const Tank = mongoose.model(config.id, data);
    return await Tank.find({tipo : "valori"}, {classi :1});
}


async function getHomeData(){
    const Tank = mongoose.model(config.id, data);
   
    return await Tank.findOne({tipo : 'homeData'}, {_id :0, classe :0, tipo:0,classi:0,data_ora:0});
}

async function getType(tipo){
    const Tank = mongoose.model(config.id, data);
   
    return await Tank.find({classe : tipo.classe , tipo : 'dato'}, {_id :0 ,tipo:0, classi:0, classe :0, id:0});
}

