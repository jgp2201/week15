function has(obj,prop) 
{
    return obj.hasOwnProperty(prop);
}
const student = {
    name: "Jay",
    age: 20,
  };
  console.log(has(student, "name"));
  console.log(has(student, "grade"));
  