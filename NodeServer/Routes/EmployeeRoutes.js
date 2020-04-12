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
                EmployeeModel.countDocuments({email:email},(err,count)=>{
                    if(err || count != 0){
                        res.setHeader('Content-type','application/json')
                        res.status(206).json({error:err,message:"Email Already Registered"})
                        }else{
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
                            Employee.save((err,cons)=>{
                                if(err){
                                    res.status(300).json(err)
                                }
                                res.status(200).json({
                                    statusCode:200,
                                    message:"User Registered as Normal Employee, but Need to join Company"
                                })
                            })
                        }

                    
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

router.post('/login',(req,res)=>{
    try{
        let {email,password} = req.body;

        // console.log(email,password);
        if(email.length >0 && password.length >0){
            const {EmployeeModel} = require("./../Models/Companies");
            
            EmployeeModel.findOne({email:email},(err,Employee)=>{
                console.length(Employee)
                if(err){
                    throw "Some Error Found While Searching in Database"
                }
                if(password == Employee.password){
                    console.log("Login Done with email = "+email + " and password = "+password)
                    
                    res.status(200).json({
                        statusCode:200,
                        message:"Login Successfull"
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
})

router.post('/search/:query',(req,res)=>{
    let { query } = req.params;
    if(query.length > 0){
        
        const {EmployeeModel} = require("./../Models/Companies");
        var regexQuery = {
            name: new RegExp(query, 'i')
          }
        EmployeeModel.find(regexQuery,{password:0,_id:0,__v:0}).limit(20).exec((err,docs)=>{
            
            res.status(200).json(docs)
        })

    }else{
        res.status(206).json({
            statusCode:206,
            message:"Query Cannot be Empty"
        })
    }
})

router.post('/:email',(req,res)=>{
    let {email} = req.params;

    if(email.length > 0){
        const {EmployeeModel} = require("./../Models/Companies");
        EmployeeModel.findOne({email:email},{password:0,_id:0},(err,Employee)=>{
            if(err){
                res.status(206).json({
                    statusCode:206,
                    error:"Some Error Found in During Quering"
                })
            }else{
                
                res.status(200).json(Employee)
            }
        })
    }else{
        re.status(206).json({
            statusCode:206,
            error:"Email Must be Greater than 0"
        })
    }
})
module.exports = router;