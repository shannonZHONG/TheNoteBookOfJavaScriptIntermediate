function Student(name){
this.name = name 
return this }

var s = {}
s = Student.call(s,"Tom")
s.name 

var s2 = new Student("Tom")
s2.name 
