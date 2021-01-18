var pool = require("./connection");

module.exports.criarAcao = async function(acao) {
    try {

        let sql = "INSERT INTO acao( organizacao_id, local, tipoAcao, extraInfo,email,diaAcaoInicio,diaAcaoFim,pessoasInscritas,localizacao) " + "VALUES (?,?,?,?,?,?,?,?,?)";
        let result = await pool.query(sql, [ acao.organizacao_id,acao.local,acao.tipoAcao,acao.extraInfo,acao.email,acao.diaAcaoInicio,acao.diaAcaoFim,acao.pessoasInscritas,acao.localizacao ]);
        return {status: 200, data: result};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}; 




//acoes participadas de um utilizador 
module.exports.getAcoesParticipadas = async function(obj) {
    try {
        //verificar se o user tem o userID/localizacao/Data tão peenchidos
        let filterQueries="";
        let filterValues=[];
        if(obj.userID){
            if(obj.localizacao){
                filterQueries+=" AND A.localizacao= ?";
                filterValues.push(obj.localizacao);
            }
            if(obj.data){
                filterQueries+=" AND DATE(A.diaAcaoInicio)= ?";
                filterValues.push(obj.data.substring(0,10)); //0-10 para ir buscar a data (sem a hora)
            }
            filterQueries+=" AND AP.user_id= ?";
            filterValues.push(obj.userID);
        }
        else{
            return {status: 500, data: ""};
        }
  
        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, A.extraInfo, A.email, A.diaAcaoInicio, A.diaAcaoFim, A.pessoasInscritas, A.maximoPessoas "+
        "FROM acao A, acaoparticipada AP, utilizador U, tipoacao TA "+
        "WHERE  A.acao_id=AP.acao_id AND U.user_id=A.organizacao_id AND TA.tipoAcao_id=A.tipoAcao"+filterQueries;

        let participadas = await pool.query(sql,filterValues);
        return {status: 200, data: participadas};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};

//acaoes em participacao de um utilizador 
module.exports.getAcoesParticipacoes = async function(obj) {
    try {
        //verificar se o user tem o userID/localizacao/Data tão peenchidos
        let filterQueries="";
        let filterValues=[];
        if(obj.userID){
            if(obj.localizacao){
                filterQueries+=" AND A.localizacao= ?";
                filterValues.push(obj.localizacao);
            }
            if(obj.data){
                filterQueries+=" AND DATE(A.diaAcaoInicio)= ?";
                filterValues.push(obj.data.substring(0,10)); //0-10 para ir buscar a data (sem a hora)
            }
            filterQueries+=" AND APP.user_id= ?";
            filterValues.push(obj.userID);
        }
        else{
            return {status: 500, data: ""};
        }
  
        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, A.extraInfo, A.email, A.diaAcaoInicio, A.diaAcaoFim, A.pessoasInscritas, A.maximoPessoas "+
        "FROM acao A, acaoparticipacao APP, utilizador U, tipoacao TA "+
        "WHERE  A.acao_id=APP.acao_id AND U.user_id=A.organizacao_id AND TA.tipoAcao_id=A.tipoAcao"+filterQueries;

        let participadas = await pool.query(sql,filterValues);
        return {status: 200, data: participadas};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};

//acao futuras de um utilizador 
module.exports.getAcoesFuturas = async function(obj) {
    try {
        //verificar se o user tem o userID/localizacao/Data tão peenchidos
        let filterQueries="";
        let filterValues=[];
        if(obj.userID){
            if(obj.localizacao){
                filterQueries+=" AND A.localizacao= ?";
                filterValues.push(obj.localizacao);
            }
            if(obj.data){
                filterQueries+=" AND DATE(A.diaAcaoInicio)= ?";
                filterValues.push(obj.data.substring(0,10)); //0-10 para ir buscar a data (sem a hora)
            }
            filterQueries+=" AND AF.user_id= ?";
            filterValues.push(obj.userID);
        }
        else{
            return {status: 500, data: ""};
        }
  
        let sql = "SELECT A.acao_id, U.username AS 'NomeOrganizacao', A.organizacao_id, A.localizacao, A.lat, A.lng, A.tipoAcao, A.extraInfo, A.email, A.diaAcaoInicio, A.diaAcaoFim, A.pessoasInscritas, A.maximoPessoas "+
        "FROM acao A, futuraacao AF, utilizador U, tipoacao TA "+
        "WHERE  A.acao_id=AF.acao_id AND U.user_id=A.organizacao_id AND TA.tipoAcao_id=A.tipoAcao"+filterQueries;

        let participadas = await pool.query(sql,filterValues);
        return {status: 200, data: participadas};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};