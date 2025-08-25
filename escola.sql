--Criar Banco de dados--

CREATE DATABASE escola;

--Criar uma tabela com colunas--


CREATE TABLE estudante(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    nomecompleto VARCHAR(60) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- INSERIR DADOS NO BD VIA COD SQL--

INSERT INTO estudante(nomecompleto,email,senha)
VALUES ("Ana Claudia Cunha","ana.cscunha1@senacsp.edu.br","123"),
("Quézia Miranda", "quezia@senacsp.edu.sp","456");

-- Selecionando todos os dados da tabela--

SELECT * FROM estudante;

-- Selecionando uma coluna na tabela--

SELECT email FROM estudantes;

--Selecionando mais de uma coluna --

SELECT nomecompleto, email FROM estudante;

