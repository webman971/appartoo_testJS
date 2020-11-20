const fs = require('fs')
 
let personne = {
   'speudo' = "Marie",
   'mdp' = "boom971",
   'datenaiss' = "25/02/2003",
   'email' = "maris@gmail.com",
}
 
let donnees = JSON.stringify(personne)
fs.writeFileSync('personnage1.js', donnees)