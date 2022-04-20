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
        return Employee.count;
    }
    getSumarySalary(){
        let sum =0;
        for(let i=0 ;i < this.listEmp.length;i++){
            let emp = this.listEmp[i];
            sum += emp.salary;
        }
        return sum;
    }
}
class Employee {
    // properties
    static count: number = 0;
    name = 'Unknown';
    role:String ='staff';
    salary:number = 0;

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
class Manager extends Employee{
    private underling = new Array();

    add(person:Employee){
        this.underling.push(person);
    }
    show(){
        for(let i=0;i<this.underling.length ;i++){
            let person = this.underling[i];
            console.log(person.name);
        }
    }
}

var obj1 = new Employee();
obj1.setRole('Programmer');
obj1.name="Man"
obj1.salary = 1000;
var obj2 = new Manager();
obj2.setRole('Manager');
obj2.name = 'Xan';
obj2.salary = 2000;
var obj3 = new Employee();
obj3.setRole('Programmer');
obj3.name = 'New';
obj3.salary = 1000;
var obj4 = new Employee();
obj4.setRole('Programmer');
obj4.name = 'Nook';
obj4.salary = 1000;

console.log(obj1.role);
console.log(obj2.role);
console.log(obj3.role);
console.log(obj4.role);

var pkl = new Company();
pkl.setPerson(obj1);
pkl.setPerson(obj2);
pkl.setPerson(obj3);
pkl.setPerson(obj4);

console.log("Company have count member is "+ pkl.getMemberCount()+" persons");
console.log(pkl.getSumarySalary());

obj2.add(obj1);
obj2.show();


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