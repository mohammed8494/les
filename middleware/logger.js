const {format} = require("date-fns");
const {v4:uuid} = require("uuid");
const fs = require("fs");
const fspromises = require("fs").promises;
const path = require("path");



const logger = async (req,res,next) => {
    const date = format(new Date(), "dd-MM-yyyy hh:mm")

     if (!fs.existsSync(path.join(__dirname,"..","logs"))){
        
        fs.mkdirSync(path.join(__dirname,"..","logs"));

    }

    await fspromises.appendFile(path.join(__dirname,"..","logs","log.txt"),`${date}\t ${uuid()}\t ${req.method} \n`).catch
    ((err) => {console.log(err)});
    next(); // this is important to move forward
    
}
module.exports = logger;
