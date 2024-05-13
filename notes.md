> planning
* I need to draw the logic of the website in figjam

> problem solving
* probe the error
* identify the problem
* identify a solution (what needs to be done)
* break it down

> global notes
* about data structures
* leetcode (interviews)
* learn a pinch of data science


*factory function (no inheritence, )* 
- making function
function factoryFunction (parameter) {
  return { 
    parameter, _=== parameter: parameter,_
    method(){ return true },
  } 
}

- making *private data* functiosn (stores no data)
function factoryFunction (parameter) {
  return { 
    method(){ return parameter }
  }
}

- instance
let a = factoryFunction("a");

- updating/adding method
a.method = function(){ return false }
a.newMethod = function(){ return false }

- calling method
a.newMethod()


*factory function (for inheritence)(old)* 
- making function
function prototype (){ 
  method(){
    return true
  }
}

function factoryFunction (parameter) {
  return Object.create(prototype, {
    parameter: {
      value: parameter;
    }
  }
)}

- instance
let a = factoryFunction("a");

- updating/adding method
prototype.method = function(){ return false }
prototype.newMethod = function(){ return false }

- calling method
a.newMethod()


*constructor function (for inheritence)*
- making funciton
function ConstructorFunction (parameter) {
  this.parameter = parameter;
  let statVariable = true;
}
ConstructorFunction.prototype.method = function(){ return false }

- instance
let a = new ConstructorFunction("a");

- updating/adding method
ConstructorFunction.prototype.method = function(){ return true }
ConstructorFunction.prototype.newMethod = function(){ return parameter }

- calling method
a.newMethod();

- calling constructor-only static method
ConstructorFunction.statMethod = function(){ return statVariable }

- creating child class
function ChildConstructor (parameter, childParameter) {
  ConstructorFunction.call(this, parameter); _super()_
  this.childParameter;
}
Object.setPrototypeOf(ChildConstructor.prototype, ConstructorFunction.prototype) _extends_
ChildConstructor.prototype.childMethod = function(){ return childParameter }


*class (basically a constructor with easier syntax)*
- making class
class Class {
  constructor(parameter){
    this.parameter; _=== this.parameter = parameter;_
  }
  method(){ return true }
  static variable = true;
  static statMethod(){ return variable }
}

- instance
let a = new Class("a");

- updating/adding method
Class.prototype.method = function() { return false }
Class.prototype.newMethod = function() { return false }

- calling method
a.newMethod();

- calling class-only static method
let varFromClass = Class.statMethod();

- creating child class
class ChildClass extends Class {
  constructor(parameter, childParameter){
    super(parameter);
    this.childParameter;
  }
  childMethod() {
    return childParameter;
  }
}

*prototype chain*
object:{}.constructor = constructor()
constructor().prototype -> OBJECT:{}

object:{}.__proto__ = OBJECT:{}
constructor().prototype.constructor = CONSTRUCTOR()

object:{}.__proto__ === 
object:{}.constructor.prototype === 
Object.getPrototypeOf(object)

Object.setPrototypeOf(object, OBJECT) _puts OBJECT between object and {} (default top js object, which has the Object constructor)_

*child object (read-only access to ancestor methods, writing results in creating local copy)*
let child = Object.create(parentObject)
let object = {}; _this is a child of {} === Object.prototype!!!_

> `NEXT TASK`
* profile page
* accessibility (alt, aria, etc)
* dark mode