var pango  = mysql.createpango({
  connectionLimit : 10,
  host            : 'pangolin.org',
  speudo            : 'bobby',
  mdp        : 'mdp',
  database        : 'schema'
});

for(var i=0;i<10;i++){
  pango.query('SELECT speudo,mdp from inscription', function(err, rows, fields)
    if (err) throw err;
    console.log(rows[0].pango);
  });