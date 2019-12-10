const {Reports} = require("../../models")
const objectId = require("mongodb").ObjectId

module.exports = {
    getAllRports: async(req, res) => {
        try {

            const result = await Reports.find({}).populate("user")

            res.status(200).json({message: "Show all report", data:result})

        } catch (error) {
            console.log(error);
        }
    },
    getByEmail: async(req, res) => {
        try {
            const result = await Reports.find({ email: req.params.email }).populate("users")

            res.status(200).json({message: "Show all report by id", data: result})
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
    },
    deleteOne: async(req, res) => {
        const { id } = req.params;
        try {
            const result = await Reports.remove({ _id: objectId(id) })

            res.status(200).json({message: `Data succesfully delete with id ${id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    },
    updateOne: async(req, res) => {
        const {id} = req.params;
        try {
            const result = await Reports.update({ _id : objectId(id) }, {$set : (req.body)})

            res.status(200).json({message: `Data succesfully update with id ${id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    }
}