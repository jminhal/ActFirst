var pool = require("./connection");


module.exports.getUser = async function(id) {
    try {

        let sql = "SELECT * FROM utilizador WHERE user_id = ?";
        let utilizador = await pool.query(sql, [ id ]);

        if (utilizador.length > 0) {
            return {status: 200, data: utilizador[0]};
        }
        else {
            return {status: 404, data: {msg: "This username does not exist"}};
        }

    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};

module.exports.checkLogin = async function(obj) {
    try {

        let sql = "SELECT * FROM utilizador WHERE username = ?";
        let utilizador = await pool.query(sql, [ obj.username ]);

        if (utilizador.length > 0) {
            return {status: 200, data: utilizador[0]};
        }
        else {
            return {status: 404, data: {msg: "This username does not exist"}};
        }

    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};

module.exports.createUser = async function(user) {
    try {

        let sql = "SELECT * FROM utilizador WHERE username = ?";
        let utilizador = await pool.query(sql, [ user.username ]);

        if (utilizador.length > 0) {
            return {status: 404, data: {msg: "username already exists!"}};
        }
        else {
            sql = "INSERT INTO utilizador(username) VALUES (?)";
            utilizador = await pool.query(sql, [ user.username ]);
            return {status: 200, data: utilizador};
        }

    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    } 
};

