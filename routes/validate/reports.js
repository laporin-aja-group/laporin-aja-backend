const reports = async ({ problem, problemSolving, location }) => {
    try {
        const result = {}

        if (!problem) {
            result.problem = "Problem Required";
        }

        if (!problemSolving) {
            result.problemSolving = "Problem Solving Required";
        }

        if (!location) {
            result.location = "Location Required";
        }

        return result;

    } catch (error) {
        
    }
}

module.exports = reports;