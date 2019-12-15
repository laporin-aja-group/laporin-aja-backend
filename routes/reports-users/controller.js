const { ReportsUser } = require("../../models")
const objectId = require("mongodb").ObjectId

module.exports = {
    getAllRports: async(req, res) => {
        try {

            const result = await ReportsUser.find({}).populate("user")

            res.status(200).json({message: "Show all report", data:result})

        } catch (error) {
            console.log(error);
        }
    },
    getByid : async(req, res) => {
        const { id } = req.params;
        try {

            const result = await ReportsUser.findOne({ _id: objectId(id) }).populate("user")

            res.status(200).json({message: `Show all report by id ${id}`, data:result})

        } catch (error) {
            console.log(error);
        }
    },
    getByEmail: async(req, res) => {
        try {
            const user = await ReportsUser.find({}).populate("user")
            const getUser = user.filter(item=>{
                return item.user.email === req.params.email
                
            })         
            

            res.status(200).json({message: `Show all report by email ${req.params.email}` , data: getUser})
        } catch (error) {
            console.log(error);
        }
    },
    addReportsUser: async(req, res) => {
        try {
            const result = await ReportsUser.create(req.body)
            
            res.status(200).json({message: "Data report successfully added", data:result})
        } catch (error) {
            console.log(error);
        }
    },
    deleteOne: async(req, res) => {
        const { id } = req.params;
        try {
            const result = await ReportsUser.remove({ _id: objectId(id) })

            res.status(200).json({message: `Data succesfully delete with id ${id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    },
    updateOne: async(req, res) => {
        const {id} = req.params;
        try {
            const result = await ReportsUser.update({ _id : objectId(id) }, {$set : (req.body)})

            res.status(200).json({message: `Data succesfully update with id ${id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    }
}