const mongoose = require('mongoose');
var config = require('config.json');

const Schema = mongoose.Schema;

const schema = new Schema({
    data_ora: { type: String, unique: true},
    classe :{ type: String, },
    classi: { type: Array },
    tipo: { type: String },
    CO2_2020: {type:String},
    CO2_2019: {type:String},
    CO2_Massima: { type: String },
    energia_elettrica_prodotta_khw: { type: String },
    energia_termica_prodotta_kWh: {type: String},
    percent_ore_di_funzionamento: {type: String},
    percent_carichi_parziali : {type: String},
    rendimento_elettrico: {type: String},
    rendimento_termico : { type: String },
    Energia_termica_consumata: {type: String},
    Energia_frigorifera_prodotta: {type: String},
    Energia_termica_dispersa : {type: String},
    percent_rendimento: {type: String}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});




module.exports =schema;