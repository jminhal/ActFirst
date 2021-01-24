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
module.exports.login = async function(username) {
    try {
        let sql = "SELECT * FROM utilizador WHERE username = ?";
        let utilizadores = await pool.query(sql,[username] );
        if (utilizadores.length > 0)
            return {status:200, data: utilizadores[0]};
        else return {status:401, data: {msg: "Incorrect name"}};
    } catch(err) {
        console.log(err);
        return {status:500, data: {msg: "Server Problems. Try again later", err:err}};
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
}

module.create = async (module) => {
    try {
        module.project = 1;
        let res = await database.query('INSERT INTO Modules SET?', module);
        return {id: res.insertId, ...module};
    
    }
    catch(err) {
        console.log('An error as occured while trying to INSERT INTO Modules. \n Duumping Stack, \n', err.stack);
        return err.message;
    }
}
