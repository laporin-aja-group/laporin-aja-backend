const { Users } = require("../../models")

const register = async ({ email, password, fullName, phoneNumber}) => {
    try {
        const result = {}
        const data = await Users.findOne({ email : email});

        if (!fullName) {
            result.fullName = "Fullname Required";
        }

        if (!phoneNumber) {
            result.phoneNumber = "Phone Number Required";
        } else if (phoneNumber.length < 11) {
            result.phoneNumber = "Invalid telephone number";
        }

        if (!email) {
            result.email = "Email Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "Invalid Email Format";
        } else if (email) {
            if (data) {
                result.email = "Email Already Registered";
            }
        }

        if (!password) {
            result.password = "Password Required";
        } else if (password.length < 8) {
            result.password = "Password must be at least 8 characters long";
        }

        return result;

    } catch (error) {
        throw error;
    }
}

module.exports = register;