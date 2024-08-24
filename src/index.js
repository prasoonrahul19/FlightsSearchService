const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/serverconfig');

const ApiRoutes = require('./routes/index');
const {City,Airport} = require('./models/index')

const db= require('./models/index')

const setupAndStartServer = async()=>{
    //create express server
    const app = express(); 

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes); 
  
    app.listen(3000,async()=>{

        console.log(`server started at 3000`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
        // const city = await City.findOne({
        //     where: {
        //         id:9
        //     }
        // });
        // const airports = await Airport.findAll({
        //     include:City
        // });
        // // console.log(airports);
        // const  airports = await city.getAirports();
        // console.log(city,airports);
    });
}

setupAndStartServer();