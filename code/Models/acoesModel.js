var pool = require("./connection");

module.exports.getAllAcoes = async function() { 
    try {
        const sql = "SELECT * FROM acao";
        const acoes = await pool.query(sql);
        return {status: 200, data: acoes};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}

module.exports.getAcao = async function(acao_id) {
    try {
        let sql = "SELECT * FROM acao WHERE acao_id = ?";
        let acoes = await pool.query(sql, [ acao_id ]);
        return {status: 200, data: acoes[0]};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};