const router = require('express').Router();

const stu_Data = require('../studentData'); 
router.put('/update/:id', (req, res) => {
  try{
  let id = parseInt(req.params.id);
  const updateStudent = req.body;
  const updateStud = stu_Data.find((item) => item.id === id);

  if(updateStud===null)
        throw new Error();
  }catch
  {
     next(errorHandler)
  }

  const data=stu_Data.map((item)=>{
 
      if(item.id===Number(id)){
             item=updateStudent;
      }
      return item;
      });

     res.json({
      message: "Updated Successfully",
      items: data,
    });
  });

  

  router.get('/list', (req, res) => {
    stu_Data.forEach((employee) => {
      console.log(`Roll No: ${employee.roll_no}`);
    });
    //first app listening on port 3000
// Roll No: 18
// Roll No: 17
  
    // Send the empData as a JSON response
    res.json(empData);
  });

 
router.post('/create', (req, res) => {
    console.log("========post=======");

    let data = req.body;
    console.log(data);
    stu_Data.push(data);
    res.json({
        items: stu_Data
    });
//{ id: 111, firstName: 'Sam', lastName: '', roll_no: '16' }
});



module.exports = router;

