var pool = require("./connection");

//recebe a informação de umacerta ação
module.exports.getAcao = async function(acao_id) {
    try {

        let sql = "SELECT  U.username, U.email, A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, TA.nome, A.extraInfo,DATE_FORMAT(A.diaAcaoInicio, '%d-%m-%y')AS 'diaAcaoInicio', DATE_FORMAT(A.diaAcaoInicio, '%H:%i')AS 'horaAcaoInicio', DATE_FORMAT(A.diaAcaoFim, '%d-%m-%y') AS 'diaAcaoFim', DATE_FORMAT(A.diaAcaoFim, '%H:%i') AS 'horaAcaoFim', COUNT(A.acao_id) AS 'numeroInscritos', A.maximoPessoas "+
        "FROM acao A, utilizador U, tipoacao TA, acaoUtilizador AU "+
        "WHERE A.acao_id = ? AND A.organizacao_id= U.user_id AND AU.acao_id=A.acao_id AND TA.tipoAcao_id=A.tipoAcao"
        
        let result = await pool.query(sql, [acao_id]);
        console.log(sql);
        if (result.length > 0) {
            return {status: 200, data: result[0]};
        }
        else {
            return {status: 404, data: {msg: "Açao não encontrada!"}};
        }

    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 

//acoes que o utilizador podera participar
module.exports.getAcoesParticipar = async function(obj) {
    try {
        let filterQueries="";
        let filterValues=[];
        if(obj.userID){

            filterValues.push(obj.userID);

            if(obj.localizacao){
                filterQueries+=" AND A.localizacao= ?";
                filterValues.push(obj.localizacao);
            }
            if(obj.data){
                filterQueries+=" AND ? BETWEEN DATE(A.diaAcaoInicio) AND DATE(A.diaAcaoFim)";
                filterValues.push(obj.data);
            }
        }
        else{
            return {status: 500, data: ""};
        }
        

        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, TA.nome, A.extraInfo, U.email, DATE_FORMAT(A.diaAcaoInicio, '%d-%m-%y') AS 'diaAcaoInicio', DATE_FORMAT(A.diaAcaoInicio, '%H:%i') AS 'horaAcaoInicio', DATE_FORMAT(A.diaAcaoFim, '%d-%m-%y') AS 'diaAcaoFim', DATE_FORMAT(A.diaAcaoFim, '%H:%i') AS 'horaAcaoFim', A.maximoPessoas, COUNT(A.acao_id) AS 'numeroInscritos' "+
        "FROM acao A, tipoacao TA, utilizador U, acaoutilizador AU "+
        "WHERE "+
        "NOT EXISTS "+
        "( " +
        "SELECT * "+
        "FROM acaoutilizador AU "+
        "WHERE AU.acao_id = A.acao_id AND AU.user_id = ? "+
        ") "+
        "AND TA.tipoAcao_id=A.tipoAcao AND A.organizacao_id = U.user_id AND AU.acao_id = A.acao_id "+filterQueries+
        " GROUP BY A.acao_id"

        let participadas = await pool.query(sql,filterValues);
        return {status: 200, data: participadas};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};


//acoes que o utilizador participou (AP)
module.exports.getAcoesParticipadas = async function(obj) {
    try {

        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, A.extraInfo, U.email, DATE_FORMAT(A.diaAcaoInicio, '%d-%m-%y') AS 'diaAcaoInicio', DATE_FORMAT(A.diaAcaoInicio, '%H:%i') AS 'horaAcaoInicio', DATE_FORMAT(A.diaAcaoFim, '%d-%m-%y') AS 'diaAcaoFim', DATE_FORMAT(A.diaAcaoFim, '%H:%i') AS 'horaAcaoFim', TA.nome, COUNT(A.acao_id) AS 'numeroInscritos', A.maximoPessoas "+
        "FROM acao A, acaoutilizador AU , utilizador U, tipoacao TA "+
        "WHERE  A.acao_id=AU.acao_id AND U.user_id=A.organizacao_id AND TA.tipoAcao_id=A.tipoAcao AND CURDATE() > DATE(A.diaAcaoFim) AND AU.user_id = ? GROUP BY A.acao_id";
        let result = await pool.query(sql, [obj.userID]);
        return {status: 200, data: result};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 

//acoes que o utilizador se encontrar a participar(APP)
module.exports.getAcoesParticipacaoPresente = async function(obj) {
    try {

        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, A.extraInfo, U.email, DATE_FORMAT(A.diaAcaoInicio, '%d-%m-%y')AS 'diaAcaoInicio', DATE_FORMAT(A.diaAcaoInicio, '%H:%i')AS 'horaAcaoInicio', DATE_FORMAT(A.diaAcaoFim, '%d-%m-%y') AS 'diaAcaoFim', DATE_FORMAT(A.diaAcaoFim, '%H:%i') AS 'horaAcaoFim', TA.nome, COUNT(A.acao_id) AS 'numeroInscritos', A.maximoPessoas "+
        "FROM acao A, acaoutilizador AU , utilizador U, tipoacao TA "+
        "WHERE AU.acao_id = A.acao_id AND U.user_id = A.organizacao_id AND TA.tipoAcao_id = A.tipoAcao AND (CURDATE() BETWEEN DATE(A.diaAcaoInicio) AND DATE(A.diaAcaoFim) OR A.diaAcaoInicio BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 7 DAY)) AND AU.user_id = ? GROUP BY A.acao_id";


        let result = await pool.query(sql, [obj.userID]);
        return {status: 200, data: result};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 

//acoes que o utilizador se encontrar a participar no futuro (AF)
module.exports.getAcoesFuturas = async function(obj) {
    try {

        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, A.extraInfo, U.email, DATE_FORMAT(A.diaAcaoInicio, '%d-%m-%y')AS 'diaAcaoInicio', DATE_FORMAT(A.diaAcaoInicio, '%H:%i')AS 'horaAcaoInicio', DATE_FORMAT(A.diaAcaoFim, '%d-%m-%y') AS 'diaAcaoFim', DATE_FORMAT(A.diaAcaoFim, '%H:%i') AS 'horaAcaoFim', TA.nome, COUNT(A.acao_id) AS 'numeroInscritos', A.maximoPessoas "+
        "FROM acao A, acaoutilizador AU , utilizador U, tipoacao TA "+
        "WHERE AU.acao_id = A.acao_id AND U.user_id = A.organizacao_id AND TA.tipoAcao_id = A.tipoAcao AND A.diaAcaoInicio > DATE_ADD(CURDATE(), INTERVAL 7 DAY) AND AU.user_id = ? GROUP BY A.acao_id";
        console.log(sql);

        let result = await pool.query(sql, [obj.userID]);
        return {status: 200, data: result};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 

// Quando um utilizador carrega para participar numa ação
module.exports.addAcaoUtilizador = async function(obj) {
    try {

        let sql = "INSERT INTO acaoutilizador (acao_id, user_id) VALUES(?,?)";

        let result = await pool.query(sql, [obj.acao_id, obj.user_id]);
        return {status: 200, data: result};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 

// vai buscar os tipos de acoes
module.exports.getTipoAcoes = async function() {
    try {

        let sql = "SELECT * FROM tipoacao";
        let result = await pool.query(sql);

        if (result.length > 0) {
            return {status: 200, data: result};
        } 
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 


//criar acao
module.exports.criarAcao = async function(acao) {
    try {

        let sql = "INSERT INTO acao(organizacao_id, lat, lng, localizacao, tipoAcao, extraInfo, diaAcaoInicio, diaAcaoFim, maximoPessoas)"
        + "VALUES (?,?,?,?,?,?,?,?,?)";
        let result = await pool.query(sql, [ acao.organizacao_id, acao.latitude, acao.longitude, acao.localizacao, acao.tipoAcao, acao.extraInfo, acao.diaAcaoInicio, acao.diaAcaoFim, acao.maximoPessoas ]);
        
        let id = result.insertId;

        sql = "INSERT INTO acaoutilizador(acao_id, user_id) VALUES (?,?)";
        result = await pool.query(sql, [ id, acao.organizacao_id ]);

        return {status: 200, data: result};
        
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 


//quando uma organização apagar uma ação
module.exports.apagarAcao = async function(obj) {
    try {

        let sql = "DELETE FROM acaoutilizador WHERE acao_id = ?";
        let acao = await pool.query(sql, [ obj.acao_id ]);

        sql = "DELETE FROM acao WHERE organizacao_id = ? AND acao_id = ?";
        acao = await pool.query(sql, [ obj.organizacao_id, obj.acao_id ]);

        return {status: 200, data: acao};

    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};