function prop(obj) 
{
    return Object.keys(obj).length;
} 
const student = {
    name: "Jay",
    age: 20,
    grade: "A"
  };
    console.log(prop(student));
  