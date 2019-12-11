const login = async ({ email, password }) => {
    try {
        const result = {};
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