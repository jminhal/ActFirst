var pool = require("./connection");

module.exports.getAllAcaoParticipada = async function() { 
    try {
        const sql = "SELECT * FROM acaoParticipada";
        const acoesParticipadas = await pool.query(sql);
        return {status: 200, data: acoesParticipadas};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}

module.exports.getAcaoParticipacao = async function(acaoParticipada_id) {
    try {
        let sql = "SELECT * FROM acaoParticipada WHERE acaoParticipada_id = ?";
        let acoesParticipadas = await pool.query(sql, [ acaoParticipada_id ]);
        return {status: 200, data: acoesParticipadas[0]};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};
