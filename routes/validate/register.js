const { Users } = require("../../models")

const register = async ({ email, password, firstName, lastName, phoneNumber}) => {
    try {
        const result = {}
        const data = await Users.findOne({ email : email});

        if (!email) {
            result.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "Invalid Email Format";
        } else if (email) {
            if (data) {
                result.email = "Email Already Registered";
            }
        }

        if (!password) {
            result.password = "Required";
        } else if (password.length < 8) {
            result.password = "Password must be at least 8 characters long";
        }

        if (!phoneNumber) {
            result.phoneNumber = "Required";
        } else if (phoneNumber.length < 11) {
            result.phoneNumber = "Invalid telephone number";
        }

        if (!firstName) {
            result.firstName = "Required";
        }

        if (!lastName) {
            result.lastName = "Required";
        }

        return result;

    } catch (error) {
        throw error;
    }
}

module.exports = register;