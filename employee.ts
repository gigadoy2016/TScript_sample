class Company{
    // properties      
    name='PKL';
    listEmp = new Array();
    //Method
    setPerson(person:Employee){
        this.listEmp.push(person);
        console.log(person);
    }
    getEmployee(number:number){
        return this.listEmp[number];
    }
    getMemberCount(){
        return this.listEmp.length;
    }
}
class Employee {
    // properties
    static count: number = 0;
    name = 'Unknown';
    role:String ='staff';
    // methods
    constructor(){
        Employee.count++;
    }
    setRole(r:String){
        this.role = r;
    }      
    walk() {
      console.log("Walking...");
    }
}
var obj1 = new Employee();
obj1.setRole('Programmer');
var obj2 = new Employee();
obj1.setRole('Manager');
var obj3 = new Employee();
var obj4 = new Employee();

console.log(obj1.role);
console.log(obj2.role);
console.log(obj3.role);
console.log(obj4.role);

var pkl = new Company();
pkl.setPerson(obj1);
pkl.setPerson(obj2);
pkl.setPerson(obj3);

console.log("Company have count member is "+ pkl.getMemberCount()+" persons");


  /*

*/
/*var obj1 = new Employee();
var obj2 = new Employee();
var obj3 = new Employee();
obj1.name = 'เสี่ยแบงค์';
console.log(obj1.name);
obj1.walk();

console.log(Employee.count);

var c = new Company();
c.setPerson(obj1);
c.setPerson(obj2);
c.setPerson(obj3);


console.log("Company have count member is "+ c.getMemberCount()+"persons");
*/