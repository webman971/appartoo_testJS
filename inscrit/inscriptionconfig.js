var inscription = require('../JS/test_JS/inscrit/inscription');
var crypto = require('crypto');

var inscriptionController = {

    create: function(req, res){
        var remdp = req.body.remdp;
        var mdp = req.body.mdp;
        var incriptionEmail = req.body.email;

        inscription.find({"email": incriptionEmail}, function(err, usr){
            if(usr.length > 0){
                
                res.json('Email already exists');
                return;
            }
            else
            {
                //New Email
                
                //Check for same passwords
                if(mdp != remdp){
                    res.json('mdp does not match');
                    return;
                }

                //Generate Password hash based on sha1
                var shasum = crypto.createHash('sha1');
                shasum.update(req.body.password);
                var mdpHash = shasum.digest('hex');

                var inscription = new inscription();
                inscription.nom = req.body.nom;
                inscription.email = req.body.email;
                inscription.mdp = mdpHash;
                incription.datenaiss = Date.parse(req.body.dob) || "";
                inscription.genre = req.body.genre;

                //Validate the User
                inscription.validate(function(err){
                    if(err){
                        res.json(err);
                        return;
                    }else{
                        inscription.save(function(err){
                            if(err)
                            {
                                res.json(err);
                                return;
                            }
                
                            inscription.mdp = undefined;
                            res.json(inscription);
                            return;
                        });
                    }
                });
             }
        });
    }

}