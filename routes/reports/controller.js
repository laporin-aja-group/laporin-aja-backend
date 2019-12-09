const {Reports} = require("../../models")

module.exports = {
    getAllRports: async(req, res) => {
        try {

            const result = await Reports.find({})

            res.status(200).json({message: "Show all report", data:result})

        } catch (error) {
            console.log(error);
        }
    },
    addReports: async(req, res) => {
        try {
            const result = await Reports.create(req.body)
            
            res.status(200).json({message: "Data report successfully added", data:result})
        } catch (error) {
            console.log(error);
        }
    }
}