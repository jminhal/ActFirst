var pool = require("./connection");

module.exports.getAllLocalizacoes = async function() { 
    try {
        const sql = "SELECT * FROM localizacao";
        const localizacoes = await pool.query(sql);
        return {status: 200, data: localizacoes};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
}

module.exports.getlocalizacao = async function(user_id) {
    try {
        let sql = "SELECT * FROM localizacao WHERE user_id = ?";
        let localizacoes = await pool.query(sql, [ user_id ]);
        return {status: 200, data: localizacoes[0]};
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};
