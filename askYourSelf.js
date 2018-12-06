/*
要求不使用 class，完成如下需求：

写出一个构造函数 Animal
输入为空
输出为一个新对象，该对象的共有属性为 {行动: function(){}}，没有自有属性
再写出一个构造函数 Human
Human 继承 Animal
输入为一个对象，如 {name: 'Frank', birthday: '2000-10-10'}
输出为一个新对象，该对象自有的属性有 name 和 birthday，共有的属性有物种（人类）、行动和使用工具
在写出一个构造函数 Asian
Asian 继承 Human
输入为一个对象，如 {city: '北京', name: 'Frank', birthday: '2000-10-10' }
输出为一个新对象，改对象自有的属性有 name city 和 bitrhday，共有的属性有物种、行动和使用工具和肤色
既

最后一个新对象是 Asian 构造出来的
Asian 继承 Human，Human 继承 Animal
*/

/*唯一的问题就是 dataOfbirth 传的字体有问题 */


/*重点 对象是如何继承父 的共有属性  对象是如何继承 父的 私有属性*/
function Animal() {}
 Animal.prototype.行走 = function() { /*Animal的行走的代码*/ }

 function Human(options) {
 this.name = options.name
 this.birthDay = options.birthDay
        }

 Human.prototype.物种 = "人类"

 Human.prototype.使用工具 = function() { /*Human的使用工具的代码*/ }

 function fakeHuman() {}
 fakeHuman.__proto__ = Animal.prototype
 Human.prototype.__proto__ = new fakeHuman()

 function Asian(options) {
 Human.call(this,options)
 this.city = options.city
  }

 Asian.prototype.肤色 = "yellow"

 function fakeAsian() {}
 fakeAsian.__proto__ = Human.prototype
 Asian.prototype.__proto__ = new fakeAsian()

 var jack = new Asian({
            name: "Jack",
            city: "chongQIng",
            dataOfBirth: "1990-01-01"
        })
 
 
 ====================================================================================================
 /* the solution from the lecture*/                         
 function Animal(){

}
Animal.prototype.行动 = function(){}
function Human(options){
    Animal.call(this, options)
    this.name = options.name
    this.birthday = options.birthday
}
extend(Human, Animal)
Human.prototype.物种 = '人类'
Human.prototype.行动 = function(){}
Human.prototype.使用工具 = function(){}
function Asian(options){
  Human.call(this, options)
  this.city = options.city
}
extend(Asian, Human)
Asian.prototype.肤色 = '黄色'


let a = new Asian({city: '北京', name: 'Frank', birthday: '2000-10-10' })
console.log(a)





/* 帮助函数 */

function extend(child, parent){
  var f = function(){}
  f.prototype = parent.prototype
  child.prototype = new f()
  child.prototype.constructor = child
} 
 
//  only diff is how to have the  public properties of parent 
//  
======================================================================================================= 
 class Animal {
 行动() {}
        }
 class Human extends Animal {
 constructor(options) {
 // 重点 
 super()
 this.name = options.name
 this.birthDay = options.birthDay
 this.物种 = "人类"
  }
 使用工具() {}

 }

class Asian extends Human {
constructor(options) {
super(options)
this.city = options.city
this.肤色 = "yellow"
}
}
 
 
 
