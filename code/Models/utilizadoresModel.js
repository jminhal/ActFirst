var pool = require("./connection");

module.exports.getAllUtilizadores = async function() { 
    try {
        const sql = "SELECT * FROM utilizador";
        const utilizadores = await pool.query(sql);
        return {status: 200, data: utilizadores};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}

module.exports.getUtilizador = async function(user_id) {
    try {
        let sql = "SELECT * FROM utilizador WHERE user_id = ?";
        let utilizadores = await pool.query(sql, [ user_id ]);
        return {status: 200, data: utilizadores[0]};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};
//acao participada de um utilizador 
module.exports.getParticipadasUtilizador = async function(user_id) {
    try {
        let sql = "SELECT * "+
        "FROM acao A, acaoparticipada AP, utilizador U, tipoacao TA"+
        "WHERE user_id = ? "+
        "AND  A.acao_id=AP.acao_id AND U.user_id=AP.acao_id AND TA.tipoAcao_id=A.tipoAcao";

        let participadas = await pool.query(sql, [ user_id ]);
        return {status: 200, data: participadas};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};

