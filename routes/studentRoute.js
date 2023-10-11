const express =require('express');
  const studentRouter = express.Router();
  const { insertStudent, getAllStudent, getOneStudent,updateStudent, deleteStudent} = require('../controllers/studentController');

studentRouter.post('/',  async (req, res, next)=>{
     try{
         const name = req.body.student.name;
         const standard = req.body.student.standard;
         const school = req.body.student.school;
        
               if (!name || !standard || !school) {
                 return res.sendStatus(400);
              }
   
         const student =  await insertStudent(name, standard,school).then(() => res.json({ message: 'Student created.' }));
          console.log(req.body);
          
   
     } catch(e){
         console.log(e);
         res.sendStatus(400);
     }
  });

  studentRouter.get('/', async (req, res, next) => {
    try {
        const students = await getAllStudent();
        res.status(200).json({ students: students });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


  studentRouter.param('studentId', async (req, res, next, studentId)=> {
    try{
        const student = await getOneStudent(studentId);
        req.student = student;
        next(); // go to apiRouter.get('/:employeeId')
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
 });
  
 // Get an student
   
 studentRouter.get('/:studentId',  (req, res, next)=>{
  res.status(200).json({student: req.student});
});

// Update an student
  
studentRouter.put('/:studentId',  async (req, res, next)=>{
  try{
    const name = req.body.student.name;
    const standard = req.body.student.standard;
    const school = req.body.student.school;
    const studentId= req.params.studentId;

            if (!name || !standard  || !school) {
              return res.sendStatus(400);
           }

      const student =  await updateStudent(name, standard, school, studentId).then(()=>{return getOneStudent(studentId);});
      res.json({student: student});
      
  } catch(e){
      console.log(e);
      res.sendStatus(400);
  }
});

// Delete an employee
  
studentRouter.delete('/:studentId', async (req, res, next)=>{
  try{
      const studentId = req.params.studentId;
      const response = await deleteStudent(studentId);
      return res.sendStatus(204);

  } catch(e){
      console.log(e);
  }
})



  module.exports = studentRouter