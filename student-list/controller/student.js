var studentService=require('../services/student');

module.exports=(app)=>{

    app.get('/list', (req, res) => {
        console.log("loaded all data ")

        studentService().LoadData(req, res);
    });
    app.post('/delete', (req, res) => {
        console.log("delete data " + JSON.stringify(req.body))

        studentService().deletedata(req, res);
    });

    app.post('/add', (req, res) => {
        console.log("adding data" + JSON.stringify(req.body))

        studentService().Adddata(req, res);
    });

    
    app.post('/update', (req, res) => {
        console.log("update data" + JSON.stringify(req.body))

        studentService().Updatedata(req, res);
    });

    app.post('/edit', (req, res) => {
        console.log("editing data" + JSON.stringify(req.body))

        studentService().edit(req, res);
    });


}