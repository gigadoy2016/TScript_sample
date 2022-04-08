var Company = /** @class */ (function () {
    function Company() {
        // properties      
        this.name = 'PKL';
        this.listEmp = new Array();
    }
    //Method
    Company.prototype.setPerson = function (person) {
        this.listEmp.push(person);
        console.log(person);
    };
    Company.prototype.getEmployee = function (number) {
        return this.listEmp[number];
    };
    Company.prototype.getMemberCount = function () {
        return this.listEmp.length;
    };
    return Company;
}());
var Employee = /** @class */ (function () {
    // methods
    function Employee() {
        this.name = 'Unknown';
        this.role = 'staff';
        Employee.count++;
    }
    Employee.prototype.setRole = function (r) {
        this.role = r;
    };
    Employee.prototype.walk = function () {
        console.log("Walking...");
    };
    // properties
    Employee.count = 0;
    return Employee;
}());
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
console.log("Company have count member is " + pkl.getMemberCount() + " persons");
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
