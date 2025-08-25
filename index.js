/*var conexao = require("./conexaoBanco");


conexao.connect(function(error){
if(error) throw error;
//console.log("O banco de dados foi conectado!");

conexao.query("select * from estudante", function(error,result){
    if(error) throw error;
    console.log(result);
    console.log(result[0]);
    console.log(result[0].nomecompleto)
});

});

*/

var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.sendFile(__dirname+'/cadastro.html');
});

app.listen(7000);