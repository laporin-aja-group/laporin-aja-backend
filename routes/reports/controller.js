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
    getById: async(req, res) => {
        const { id } = req.params;
        try {
            const result = await Reports.findOne({ _id: objectId(id) }).populate("user")

            res.status(200).json({message: `Show all report by id ${id}`, data:result})
        } catch (error) {
            console.log(error);
        }
    },
    getInSearch: async(req, res) => {
        try {

            const user = await Reports.find({problem:{$regex: req.query.q, $options: 'i'}}).populate("user")
            const getUser = user.filter(item=>{
                return item.user.email === req.params.email
                
            })
              
            res.status(200).json({message: `Show all report by email ${req.params.email}` , data: getUser})
        } catch (error) {
            console.log(error);
        }
    },
    getAllProblemSearch: async(req, res) => {
        try {

            const user = await Reports.find({problem:{$regex: req.query.q, $options: 'i'}}).populate("user")
              
            res.status(200).json({message: `Show all report search problem` , data: user})
        } catch (error) {
            console.log(error);
        }
    },
    getAllLocationSearch: async(req, res) => {
        try {

            const user = await Reports.find({location:{$regex: req.query.q, $options: 'i'}}).populate("user")
              
            res.status(200).json({message: `Show all report search location` , data: user})
        } catch (error) {
            console.log(error);
        }
    },
    getByEmail: async(req, res) => {
        try {

            const user = await Reports.find({}).populate("user")
            const getUser = user.filter(item=>{
                return item.user.email === req.params.email
                
            })
              
            res.status(200).json({message: `Show all report by email ${req.params.email}` , data: getUser})
        } catch (error) {
            console.log(error);
        }
    },
    getByProcess: async(req, res) => {
        try {
            const user = await Reports.find({}).populate("user")
            const getUser = user.filter(item=>{
                return item.user.email === req.params.email
            })
            const getProcesss = getUser.filter(item=> {
                return item.process === req.params.process
            })
            

            res.status(200).json({message: `Show all report by email and process ${req.params.email}` , data: getProcesss})
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
        console.log(req.body);
        
        try {
            const result = await Reports.update({ _id : objectId(id) }, {$set : (req.body)})

            res.status(200).json({message: `Data succesfully update with id ${id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    }
}