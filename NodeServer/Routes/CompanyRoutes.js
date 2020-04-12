const router = require("express").Router();

router.post('/register',(req,res)=>{
   
    try{
        let { 
            name,
            phone,
            email,
           address,
           admin
        } = req.body;
        console.log(name,phone,email,address,admin)


        if(name && phone && email && address && admin && address.line1 && address.line2 && address.city && address.state && address.country && admin.adminEmail && admin.adminPassword){
            const {CompanyModel} = require("./../Models/Companies");
            
            CompanyModel.countDocuments({phone:phone},(err,count)=>{
                if(count == 0){
                    let Company = new CompanyModel({
                        name:name,
                        phone:phone,
                        email:email,
                        address:{
                            line1:address.line1,
                            line2:address.line2,
                            city:address.city,
                            state:address.state,
                            country:address.country
                        },
                        admin:{
                            adminEmail:admin.adminEmail,
                            adminPassword:admin.adminPassword
                        }
                    }); // Data Feeded to Company Model
        
                    Company.save(()=>{
                        res.status(200).json({
                            statusCode:200,
                            message:"Company Registered"
                        })
                    });
                }else{
                    res.status(203).json({
                        statusCode:203,
                        message:"May Be There is Some Company With tha Same Error"
                    })
                }

            })

        }else{
            throw {error:"Name,Email,Address,Admin Details are necessary"}
        }
    }catch(e){
        res.status(400).json(e)
    }
    // res.status(200).json({address});
}); // Company Registered
router.post('/login',(req,res)=>{
    try{
        let {email,password} = req.body;

        // console.log(email,password);
        if(email.length >0 && password.length >0){
            const {CompanyModel} = require("./../Models/Companies");
            
            CompanyModel.findOne({email:email},(err,Company)=>{
                if(err){
                    throw "Some Error Found While Searching in Database"
                }
                if(password == Company.admin.adminPassword){
                    console.log("Login Done with email = "+email + " and password = "+password)
                    
                    res.status(200).json({
                        statusCode:200,
                        message:"Login Successfull",
                        Company:Company
                    })
                }else{
                    res.status(206).json({
                        statusCode:206,
                        message:"Password Entered Wrong"
                    })
                }
            })
        }else{
            throw "Phone or Password is Missing"
        }

    }catch(e){
        res.status(300).json({
            statusCode:400,
            message:e
        })
    }
});
router.post('/add/Employee/:CompanyID',(req,res)=>{
    try{
        let { CompanyID } = req.params;
        let { phone,_id } = req.body;
        if(phone || _id){
            const { EmployeeModel,CompanyModel } = require("./../Models/Companies");
            EmployeeModel.findOne({_id:_id},(err,Employee)=>{
                if(err){
                    res.status(400).json({
                        error:"Unable to Find by Given ID"
                    });
                }
                
                CompanyModel.findOne({_id:CompanyID},(err,docs)=>{
                    console.log(docs)
                    docs.employees.push(Employee._id)

                    docs.save();
                })
            })
        }else{
            res.status(400).json({
                message:"Phone Number of _id is Missing,"
            })
        }
    }catch(e){
        res.status(400).json({e})
    }
});

module.exports = router;
