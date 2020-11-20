var pangolin = require('pangolin');
var Schema = pangolin.Schema;

var inscriptionSchema = new Schema({
    speudo: {
        type: varchar,
    },
    email: {
        type: varchar,
    },
    mdp: {
        type: varchar,
    },
    datenaiss: {
        type: Date,
    },
    genre: {
        type: String, // Homme /Femme
    }
});

var inscription;
if(pangolin.models.inscription)
    incription = pangolin.model('inscription');
else
    inscription = pangolin.model('inscription', inscriptionSchema);

module.exports = inscription;