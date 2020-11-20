let b = inscription.body;
let p1 = personne.getElementById('p1');
let newP = personne.createElement('p'); 

let cloneP1 = p1.cloneNode(true);

b.replaceChild(newP, p1);