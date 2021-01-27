var pool = require("./connection");

//criar acao
module.exports.criarAcao = async function(acao) {
    try {

        let sql = "INSERT INTO acao( organizacao_id, local, tipoAcao, extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,localizacao) "
        + "VALUES (?,?,?,?,?,?,?,?,?)";
        let result = await pool.query(sql, [ acao.organizacao_id,acao.local,acao.tipoAcao,acao.extraInfo,acao.email,acao.diaAcaoInicio,acao.diaAcaoFim,acao.pessoasInscritas,acao.localizacao ]);
        return {status: 200, data: result};
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
                filterValues.push(obj.data.substring(0,10)); //0-10 para ir buscar a data (sem a hora)
            }
        }
        else{
            return {status: 500, data: ""};
        }
        

        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, A.extraInfo, A.email, A.diaAcaoInicio, A.diaAcaoFim, A.pessoasInscritas, A.maximoPessoas "+
        "FROM acao A, tipoacao TA, utilizador U, acaoutilizador AU "+
        "WHERE "+
        "NOT EXISTS "+
        "( " +
        "SELECT * "+
        "FROM acaoutilizador AU "+
        "WHERE AU.acao_id = A.acao_id AND AU.user_id = ?"+
        ") "+
        "AND TA.tipoAcao_id=A.tipoAcao AND A.organizacao_id = U.user_id AND AU.acao_id = A.acao_id"+filterQueries+
        " GROUP BY A.acao_id"

        let participadas = await pool.query(sql,filterValues);
        return {status: 200, data: participadas};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};


//acoes que o utilizador participou
module.exports.getAcoesParticipadas = async function(obj) {
    try {

        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, A.extraInfo, A.email, A.diaAcaoInicio, A.diaAcaoFim, A.pessoasInscritas, A.maximoPessoas "+
        "FROM acao A, acaoutilizador AU , utilizador U, tipoacao TA "+
        "WHERE  A.acao_id=AU.acao_id AND U.user_id=A.organizacao_id AND TA.tipoAcao_id=A.tipoAcao AND CURDATE() > DATE(A.diaAcaoFim) AND AU.user_id = ?";

        let result = await pool.query(sql, [obj.userID]);
        return {status: 200, data: result};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 

//acoes que o utilizador se encontrar a participar
module.exports.getAcoesParticipadas = async function(obj) {
    try {

        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, A.extraInfo, A.email, A.diaAcaoInicio, A.diaAcaoFim, A.pessoasInscritas, A.maximoPessoas "+
        "FROM acao A, acaoutilizador AU , utilizador U, tipoacao TA "+
        "WHERE  A.acao_id=AU.acao_id AND U.user_id=A.organizacao_id AND TA.tipoAcao_id=A.tipoAcao AND CURDATE() BETWEEN DATE(A.diaAcaoInicial) DATE(A.diaAcaoFim) OR DATE_ADD(CURDATE(), INTERVAL 7 DAY) AND AU.user_id = ?";


        let result = await pool.query(sql, [obj.userID]);
        return {status: 200, data: result};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 