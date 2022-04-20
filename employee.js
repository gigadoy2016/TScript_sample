var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        return Employee.count;
    };
    Company.prototype.getSumarySalary = function () {
        var sum = 0;
        for (var i = 0; i < this.listEmp.length; i++) {
            var emp = this.listEmp[i];
            sum += emp.salary;
        }
        return sum;
    };
    return Company;
}());
var Employee = /** @class */ (function () {
    // methods
    function Employee() {
        this.name = 'Unknown';
        this.role = 'staff';
        this.salary = 0;
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
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.underling = new Array();
        return _this;
    }
    Manager.prototype.add = function (person) {
        this.underling.push(person);
    };
    Manager.prototype.show = function () {
        for (var i = 0; i < this.underling.length; i++) {
            var person = this.underling[i];
            console.log(person.name);
        }
    };
    return Manager;
}(Employee));
var obj1 = new Employee();
obj1.setRole('Programmer');
obj1.name = "Man";
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
console.log("Company have count member is " + pkl.getMemberCount() + " persons");
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
