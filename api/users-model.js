module.exports = {
    get,
    postRegister,
    postLogin
};

const Users = [];

async function get() {
    return Users
}

async function postRegister() {
    const username = req.body.username;
    const password = req.body.password;
    

    return Users
}

async function postLogin() {
    return Users
}