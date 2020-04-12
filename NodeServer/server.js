let { app,express,mongoose,bodyParser} = require("./Imports");
const path = require("path")

/* == Configuration File need not to be Public == */
const config = require("./config.json");

// To Accept JSON

/* == Defining Companies Routes == */
let CompanyRoutes = require("./Routes/CompanyRoutes");
let EmployeeRoutes = require("./Routes/EmployeeRoutes");

app.use('/api/Employee/',EmployeeRoutes);
app.use('/api/company/',CompanyRoutes);



/* == Mongoose Connection == */
mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("Connected to Mongo Database");
});


/* == Defining PORT Number == */
const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`Server Running on PORT = ${port}`)
})

    /* == Defining Companies Routes == */
// const {CompanyModel,EmployeeModel} = require("./Models/Companies");

// let Employee = new EmployeeModel({
//     name:"String",
//     phone:73586586294,
//     email:"String",
//     password:"String",
//     address:{
//         line1:'Employee 1',
//         line2:"String",
//         city:"String",
//         state:"String",
//     }
// })
// Employee.save();
// console.log(Employee._id)
// let Company = new CompanyModel({
//     name:"Google LLC",
//     phone:87598534,
//     email:"pushpendra.hpx2001@gmail.com",
//     address:"String String String String String String String String String String ",
//     admin:{
//         adminEmail:"String",
//         adminPassword:"String",
//     },
//     employees:
//         [
//            Employee._id
//         ]
    
// });
// Company.save();
