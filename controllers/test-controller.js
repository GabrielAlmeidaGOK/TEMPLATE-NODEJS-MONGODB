const TestSch = require('../models/TestSch');

exports.getTest = async (req, res, next) => {
    try {
        const testApi = await TestSch.find();

        return res.status(200).json({
            success: true,
            count: testApi.length,
            data: testApi
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Toy Cars: ${error.message}`
        })
    }
}

exports.getTestById = async (req, res, next) => {
    try {
        const testApi = await TestSch.findById(req.params.id);
        if (!testApi) {
            return res.status(404).json( {
                success: false,
                error: 'Test Not Found'
            })
        }
        return res.status(200).json({
            success: true,
            data: testApi
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Test ${req.params.id}: ${error.message}`
        })
    }
}

exports.updateTest = async (req, res, next) => {
    try {
        const testApi = await TestSch.findById(req.params.id).exec();
        if (!testApi) {
            return res.status(404).json( {
                success: false,
                error: 'Test Not Found'
            })
        }
        console.log(req.body)
        testApi.set(req.body);
        var update = await testApi.save();
        return res.status(200).json({
            success: true,
            data: update
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Test ${req.params.id}: ${error.message}`
        })
    }
}

exports.addTest = async (req, res, next) => {
    try {
        const { name, image, category, description, price } = req.body;

        const testApi = await TestSch.create(req.body);
        return res.status(201).json({
            success: true,
            data: testApi
        })
    } catch (error) {
        console.log(req);

        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: `Error Adding Test: ${error.message}`
            })
        }
    }

}

exports.deleteTest = async (req, res, next) => {
    try {
        const testApi = await TestSch.findById(req.params.id);
        if (!testApi) {
            return res.status(404).json( {
                success: false,
                error: 'Test Not Found'
            })
        }

        await testApi.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Deleting Test: ${error.message}`
        })
    }
}