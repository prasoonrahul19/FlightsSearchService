const { CityRepository }= require('../repositories/index');


class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;

        }
        catch(error)
        {
            console.log("something went wrong");
            throw(error);
        }

    }
    async deleteCity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId)
            return response;
        }
        catch(error)
        {
            console.log("something went wrong");
            throw(error);
        }

    }
    async updateCity(cityId,data){
        try{
            const city = await this.cityRepository.updateCity(cityId,data)
            return city;
        }
        catch(error)
        {
            console.log("something went wrong");
            throw(error);
        }

    }
    async getCity(){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;

        }
        catch(error)
        {
            console.log("something went wrong");
            throw(error);
        }

    }
}

module.exports = CityService;
 