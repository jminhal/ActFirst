var pool = require("./connection");

module.exports.getAllAcoesFuturas = async function() { 
    try {
        const sql = "SELECT * FROM futuraAcao";
        const AcoesFuturas = await pool.query(sql);
        return {status: 200, data: AcoesFuturas};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}

module.exports.getAcaoFutura = async function(futuraAcao_id) {
    try {
        let sql = "SELECT * FROM futuraAcao WHERE futuraAcao_id = ?";
        let AcaoFutura = await pool.query(sql, [ futuraAcao_id ]);
        return {status: 200, data: AcaoFutura[0]};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};
