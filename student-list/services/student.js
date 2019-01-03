var student = require('../../models/studentList');

module.exports = (req, res) => {

    return {
        LoadData: (req, res) => {
            console.log("i am in load data block")

            student.find({}, (err, data) => {

                if (err) {
                    res.status('400').send(err);
                }
                else {
                    res.send(data);
                }
            })



        },
        deletedata: (req, res) => {
            console.log("i am in delete block")

            student.deleteOne({ _id: req.body.id }, (err, data) => {

                if (err) {
                    res.status('400').send(err);
                }
                else {

                    res.send("successfully deleted " + JSON.stringify(data));
                }
            })



        },

        Adddata: (req, res) => {
            console.log(" i am in add block");  

           

            student.create(req.body,(err,add)=>{

                if(err){
                    res.status('400').send(err);
                   
                }
                else{
                    res.status(200).send({"add data":" data added successfully"});
                }

            })


        },
        Updatedata:(req, res) => {
            console.log(" i am in update block");  

            student.updateOne({_id:req.body.id},{ $set: req.body},(err,edit)=>{

                if(err){
                    res.status('400').send(err);
                   
                }
                else{
                    res.status(200).send({"edit data":" data updated successfully"});
                }

            })


        },

        edit:(req,res)=>{

            student.findById({_id:req.body.id},(err,data)=>{
                if(err){
                    console.log(err);
                    res.status('400').send(err);
                }
                else{
                    res.status('200').send(data);
                }

            })

        }




    }
}