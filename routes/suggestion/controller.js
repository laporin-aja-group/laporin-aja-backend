const { Suggestion } = require("../../models")

module.exports = {
    getAllSuggest: async(req, res) => {
        try {
            const result = await Suggestion.find({})

            res.status(200).json({ message: "Show all Suggestion from Users", data : result, })

        } catch (error) {
            console.log(error);
            
        }
    },
    addSuggestion: async(req, res) => {
        try {
            const result = await Suggestion.create(req.body)

            res.status(200).json({ message: "Suggestion succesfully added", data : result, })
        } catch (error) {
            console.log(error);
        }
    }
}