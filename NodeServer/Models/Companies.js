const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name:String,
    phone:Number,
    email:String,
    password:String,
    address:{
        line1:String,
        line2:String,
        city:String,
        state:String,
        country:String
    }
});
let EmployeeModel = mongoose.model('employees',EmployeeSchema);



const CompanySchema = new Schema({
    name:String,
    phone:Number,
    email:String,
    address:{
        line1:String,
        line2:String,
        city:String,
        state:String,
        country:String
    },
    admin:{
        adminEmail:String,
        adminPassword:String,
    },
    employees:[ // Just Add Employee Id, and thats it 
        {
            type:Schema.Types.ObjectId,
            rel:'employees'
        }
    ],
    work:[]
});

let CompanyModel = mongoose.model('Companies',CompanySchema);

module.exports = { EmployeeModel,CompanyModel };
