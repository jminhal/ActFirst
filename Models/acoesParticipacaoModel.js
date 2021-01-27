var pool = require("./connection");

module.exports.getAllAcoesParticipacao = async function() { 
    try {
        const sql = "SELECT * FROM acaoParticipacao";
        const AcoesParticipacao = await pool.query(sql);
        return {status: 200, data: AcoesParticipacao};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}

module.exports.getAcaoParticipacao = async function(acaoParticipacao_id) {
    try {
        let sql = "SELECT * FROM acaoParticipacao WHERE acaoParticipacao_id = ?";
        let AcoesParticipacao = await pool.query(sql, [ acaoParticipacao_id ]);
        return {status: 200, data: AcoesParticipacao[0]};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};
