const { Users } = require("../../models")
const { comparedPassword } = require("../../helpers")

const login = async ({ email, passsword }) => {
    try {
        const result = {};
        const data = await Users.findOne({ email : email})
                                .then(async result => {
                                    const compared = await comparedPassword(passsword, result.passsword);
                                    return compared;
                                })
        if (!email) {
            result.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "Invalid email format";
        }

        if (!password) {
            result.password = "Required";
        }             
    } catch (error) {
        throw error;
    }
}

module.exports = login;