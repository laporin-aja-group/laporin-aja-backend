require("dotenv").config()

module.exports = {
    PORT : process.env.PORT,
    DATABASE_NAME : process.env.DATABASE_NAME,
    DATABASE_HOST_LIVE : process.env.DATABASE_HOST_LIVE
}