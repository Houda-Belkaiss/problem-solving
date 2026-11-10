const students = [
  {
    id: 1,
    name: "Amine",
    field: "Development",
    grades: [15, 12, 18]
  },
  {
    id: 2,
    name: "Sara",
    field: "Design",
    grades: [17, 16, 14]
  },
  {
    id: 3,
    name: "Yassine",
    field: "Development",
    grades: [8, 10, 9]
  },
  {
    id: 4,
    name: "Meriem",
    field: "Marketing",
    grades: [14, 19, 16]
  },
  {
    id: 5,
    name: "Omar",
    field: "Development",
    grades: [11, 13, 15]
  }
];


function calculateAverage(student){
    let somme = 0;
    let moyenne ;
    for (let i = 0; i < student.grades.length; i++) {
        somme = somme + student.grades[i];
      //  console.log(somme);
  }
    moyenne = somme / student.grades.length;
    return moyenne;
    };

   //console.log( calculateAverage(students[1]));
    

 function getStudentResult(student){
    let moyenne = calculateAverage(student);
    if (moyenne >= 12 ) {
        return ("Admis");
    }else {
        return ("Non admis");
    }
 }
// console.log(getStudentResult(students[4]));
    
  function getStudentsByField(students, field){
   let newStudent;
   newStudent =  students.filter(element => element.field == field)
       
      return newStudent;
      
  }
  
//console.log(getStudentsByField(students, "Development"));
 
    
  function getSuccessfulStudents(students){
  let newStudent =[];
   
   for (let i = 0; i < students.length; i++) {
    let result =  getStudentResult(students[i]);
  if (result == "Admis") {
     newStudent.push(students[i]);
  }
   }
   return newStudent;
     
  
    
  }
//   console.log(getSuccessfulStudents(students)) 

 function getBestStudent(students){
  let max = 0;
  let milleureStudent = 0;
let student = getSuccessfulStudents(students);
student.forEach(element => {
 // console.log(element);
  let moyenne = calculateAverage(element);
  if (moyenne > max ) {
    max = moyenne
   milleureStudent = element;
  }
 
  
 })
 console.log(max);
 console.log(milleureStudent);
 
 }
 getBestStudent(students);