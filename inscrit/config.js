var config = {
VERSION: 1,
BUILD: 1,
URL: 'http://127.0.0.1',
API_PATH : '/api', 
PORT : process.env.PORT || 8080,
DB : {
    HOST : 'localhost',
    PORT : '27017',
    DATABASE : 'db'
},

getDBString : function(){
    return 'pangodb://'+ this.DB.HOST +':'+ this.DB.PORT +'/'+ this.DB.DATABASE;
},

getHTTPUrl : function(){
    return 'http://' + this.URL + ":" + this.PORT;
}