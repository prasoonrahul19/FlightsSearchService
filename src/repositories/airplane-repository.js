const { Airplane } = require('../models/index');

class AirplaneRepository{
    async getAirplane(id){
        try{
            const airplane = await Airplane.findByPk(id);
            console.log(airplane);
            return airplane;  
           

        }
        catch(error)
        {
            console.log("something went wrong in repository layer");
            throw(error);
        }
    }
}

module.exports = AirplaneRepository;