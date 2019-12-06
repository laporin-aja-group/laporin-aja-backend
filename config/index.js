const {PORT, DATABASE_NAME, DATABASE_HOST_LIVE, JWT_SECRET_KEY} = require("./environment")
const db = require("./connection")

module.exports = {
    PORT: PORT,
    DATABASE_NAME: DATABASE_NAME,
    DATABASE_HOST_LIVE: DATABASE_HOST_LIVE,
    db : db,
    JWT_SECRET_KEY : JWT_SECRET_KEY
}