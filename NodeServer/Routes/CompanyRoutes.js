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
        // console.log(name,phone,email,address,admin)


        if(name && phone && email && address && admin && address.line1 && address.line2 && address.city && address.state && address.country && admin.adminEmail && admin.adminPassword){
            const {CompanyModel} = require("./../Models/Companies");
            console.log("SDFC")
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
            throw {error:"Name,Email,Address,Admin Details are necessary"}
        }
    }catch(e){
        res.status(400).json(e)
    }
    // res.status(200).json({address});
})

module.exports = router;