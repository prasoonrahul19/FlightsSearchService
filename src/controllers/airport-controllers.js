const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message:'successfully created the aiport',
            err:{},
            data:response,
            success:true
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err: error,
            message: ' cannot create a new airport '

        })
        
    }
}

module.exports = {
    create,
}