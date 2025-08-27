var conexao = require("./conexaoBanco");
var express = require('express');
var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

// Conexão com o bd
conexao.connect(function(error){
    if(error) {
        console.error("Erro ao conectar ao BD")
        process.exit(); //encerrar o servidor em caso a conexão falhe 
    };
});

app.get('/', function(req,res){
    res.sendFile(__dirname+'/cadastro.html'); // get so carrega a pagina
});

app.post('/', function(req, res){  // post envia os dados para o banco 

    var nomecompleto = req.body.nomecompleto;
    var email = req.body.email;
    var senha = req.body.senha;

    
    // prevenindo SQL Injection

    var sql = "INSERT INTO estudante(nomecompleto,email,senha) VALUES (?,?,?)"; //PREVINE QUE INVADEM AS INFORMAÇÕES CONFIDENCIAIS
        conexao.query(sql,[nomecompleto, email, senha], function(error,result){
        if(error) throw error;

        //res.send("Estudante cadastrado com sucesso" + result.insertId);

        res.redirect('/estudantes')
    });

});







// Leitura do BD
app.get('/estudantes', function(req, res){ // req requisicao res resposta
    

        var sql = "select * from estudante";
        conexao.query(sql,function(error, result){
            if(error) console.log(error);
            //console.log(result);
            res.render(__dirname+"/estudantes", {estudante:result}); 
        });
    });



app.listen(7000);







//console.log("O banco de dados foi conectado!");

/*conexao.query("select * from estudante", function(error,result){
    if(error) throw error;
    console.log(result);
    console.log(result[0]);
    console.log(result[0].nomecompleto)
});

});

*/