
const db = require('../config/db');
  
const Student = db.Student;
 module.exports ={
 
  insertStudent,
  getAllStudent,
  getOneStudent,
  updateStudent,
  deleteStudent
}

async function  insertStudent(name, standard, school) {
 
    await Student.create({name, standard, school});
   console.log(school);
  }

  async function getAllStudent() {
 
    const student = await Student.findAll();
      
     return student;
   
   
    }

    async function getOneStudent(id) {
      const student = await Student.findByPk(id)
    
      return student;
  }

  async function updateStudent(name, standard, school, id) {
    await Student.update({name, standard, school }, { where: { id: id } });
}

async function deleteStudent(id) {
  const student = await getOneStudent(id);
  await student.destroy();
}
   
     
   
   