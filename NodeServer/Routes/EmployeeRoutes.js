const router = require("express").Router();

router.post("/register",(req,res)=>{
    try{
        let {
            name,
            phone,
            email,
            password,
            address
        } = req.body;

        if(name && phone && email && password 
            && address && address.line1 && address.line2 && address.city && address.state && address.country){
                    // console.log(name)
                const {EmployeeModel} = require("./../Models/Companies");
                let Employee = new EmployeeModel({
                    name:name,
                    phone:phone,
                    email:email,
                    password:password,
                    address:{
                        line1:address.line1,
                        line2:address.line2,
                        city:address.city,
                        state:address.state,
                        country:address.country
                    }
                });
                Employee.save(()=>{
                    res.status(200).json({
                        statusCode:200,
                        message:"User Registered as Normal Employee, but Need to join Company"
                    })
                })

            }else{
               throw {
                   error:"Some Fields are Missing"
               }
            }

    }catch(error){
        res.status(400).json({
            error
        })
    }
})

module.exports = router;