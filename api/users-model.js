module.exports = {
    get,
    postRegister,
    postLogin
};

const Users = [
"Bayonetta",
"Bowser",
"Bowser Jr.",
"Captain Falcon",
"Charizard",
"Cloud",
"Corrin",
"Dark Pit",
"Diddy Kong",
"Donkey Kong",
"Dr. Mario",
"Duck Hunt",
"Falco",
"Fox",
"Ganondorf",
"Greninja",
"Ike",
"Jigglypuff",
"King Dedede",
"Kirby",
"Link",
"Little Mac",
"Lucario",
"Lucas",
"Lucina",
"Luigi",
"Mario",
"Marth",
"Mega Man",
"Meta Knight",
"Mewtwo",
"Mii Brawler",
"Mii Gunner",
"Mii Swordfighter",
"Mr. Game & Watch",
"Ness",
"Olimar",
"Pac-Man",
"Palutena",
"Peach",
"Pikachu",
"Pit",
"R.O.B.",
"Robin",
"Rosalina & Luma",
"Roy",
"Ryu",
"Samus",
"Sheik",
"Shulk",
"Sonic",
"Toon Link",
"Villager",
"Wario",
"Wii Fit Trainer",
"Yoshi",
"Zelda",
"Zero Suit Samus"
];

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