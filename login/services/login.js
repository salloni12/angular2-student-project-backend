var student = require('../../models/studentList');

module.exports = (req, res) => {
    return {
        login: (req, res) => {
            console.log("i am login ");
           
            student.find({ 'email': req.body.email }, (err,data) => {
                if (err) {
                    res.status('400').send(err);
                 
                }
                else {
                    if (data.length==0) {

                        res.status(401).send('invalid email');

                    } else{
                        console.log(data);
                        console.log(req.body.password);
                        if (data[0].password !== req.body.password) {
                            res.status(401).send('invalid password');

                        }

                        else {

                            res.status(200).send({"data":"login successfully"});

                        
                        }
                    }

                }


            });


        },
        register: (req, res) => {

            student.create(req.body,(err,register)=>{

                if(err){
                    res.status('400').send(err);
                   
                }
                else{
                    res.status(200).send({"regiter":"register successfully"});
                }

            })

        }

    }
}