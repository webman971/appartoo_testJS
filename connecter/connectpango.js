var pango  = mysql.createpango({
      connectionLimit : 10,
      host            : 'pango.org',
      speudo            : 'bobby',
      mdp        : 'mdp'
    });
    
pango.getConnection(function(err, connection){
    if(err){
        return cb(err);
    }
    connection.changeinscription({database : "firm1"});
    connection.query("SELECT * from inscription", function(err, data){
        connection.release();
        cb(err, data);
    });
});