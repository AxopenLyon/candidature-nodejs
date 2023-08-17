const {query} = require("../../utils/database-connection");

function findIncludeUser(email) {
    return new Promise(async (resolve) => {
        const users = await query("SELECT * FROM user WHERE email like ?", [email]);
        resolve(users[0]);
    })
}

function createUser(user) {
    return new Promise(async (resolve) => {
        await query('INSERT INTO user (email, password) VALUES (?, ?)', [user.email, user.password]);
        resolve();
    })
}

function findUserById(userId) {
    return new Promise(async (resolve) => {
        const users = await query("SELECT * FROM user WHERE id = ?", [userId]);
        resolve(users[0]);
    })
}


module.exports = {findIncludeUser, createUser, findUserById};
