// 关于 this 的由来 

  var person = {
          name: 'frank',
          sayHi: function(person){
              console.log('Hi, I am' + person.name)
          },
          sayBye: function(person){
              console.log('Bye, I am' + person.name)
          },
          say: function(person, word){
              console.log(word + ', I am' + person.name)
          }
      }
  
  person.sayHi(person) 
  person.sayBye(person)
  person.say(person, 'How are you')  

  // 为了满足  糖水型 call function  
  person.sayHi()
  person.sayBye()
  person.say('How are you')


  // 从而引进 this 
  var person = {
          name: 'frank',
          sayHi: function(){
              console.log('Hi, I am' + this.name)
          },
          sayBye: function(){
              console.log('Bye, I am' + this.name)
          },
          say: function(word){
              console.log(word + ', I am' + this.name)
          }
      }
  
  person.sayHi.call(person) // 调用sayHi  who调用sayHi 肯定是对象呀  或者说 以person 为this 调用sayHi
  person.sayBye.call(person)
  person.say.call(person, 'How are you') 

  // call method by winodw object 
  var person = {
          name: 'frank',
          sayHi: function(){
              console.log('Hi, I am' + this.name)
          },
          sayBye: function(){
              console.log('Bye, I am' + this.name)
          },
          say: function(word){
              console.log(word + ', I am' + this.name)
          }
      }
  // 说明函数是独立存在的 函数只和call 的第一个参数 this = object 有关 
  var window.name = "name in gobal "
  var fn = person.sayHi
  fn.call(window); 

  person.sayHi.call({name:"yyy"}) 
  

  // 即使是window来调用这个函数，也要写上undefined  

  function sum(x,y){
     return x + y 
  }
  sum.call(window,2,3)
  sun.call(undefined,1,3) // 不想用this 就传个null 

  // call apply diff 当不确定参数有多少个时候,使用apply 

   function sum() {
      var n = 0;
      for (var i = 0; i < arguments.length; i++) {
                n += arguments[i]
            }
       return n
        }
var a = [1, 2, 3, 4, 5, 6, 7, 8]
sum.apply(undefined, a)


// 关于bind 

function logThisAndArguments(arg1, arg2) {
    console.log(this);
    console.log(arg1);
    console.log(arg2);
}

const obj = { val: 'Hello!' };
const fnBound = logThisAndArguments.bind(obj, 'First arg', 'Second arg');

console.log(fnBound);
// -> [Function: bound logThisAndArguments]

fnBound();
// -> { val: 'Hello!' }
// -> First arg
// -> Second arg

/*
However, instead of calling the function immediately, bind returns a new function. 
This new function has the this value and the parameters already set and bound. 
When it’s invoked, it’ll be invoked with those items already in place.  
*/
  

// 柯里化 
//字符串 和 对象的结合 
var Handlerbar = function(template,data){
    return template.replace('{{name}}',data.name)
}
Handlerbar('<h1> Hi,I am {{name}}}</h1>',{name:"frank"})
  
  
var template  = '<h1> Hi,I am {{name}}}</h1>'
Handlerbar(template,{name:"frank"} )  

// 可是上面的例子声明了一个变量 就很不函数式了 
// 第一次：返回的函数不会  渲染 这个templete 
//但是第二次 才会 填东西 
//也可以说成是 惰性求职 因为第一次function返回的 什么都没有做
function Handlerbar(template){
return function(data){
return template.replace('{{name}}',data.name)}
}

var test = Handlerbar ('<h1> Hi,I am {{name}}}</h1>') 
t{(name:"test")}


// 高阶函数 
// 常规思维 
var array = [3,2,1,4,5,6,7,8]

var sum = 0
for(var i = 0; i<array.length;i++){
if(array[i] % 2 ===0){
    sum += array[i]
}
}
console.log(sum)

// 接受多个函数作为输入 
 var array = [3, 2, 1, 4, 5, 6, 7, 8]
 var test = array.filter.call(array, function(value) {
            return value % 2 === 0
 }).reduce(function(accumulator, currentValue) {
            return accumulator + currentValue
 }, 0)
 console.log(test)

// 但是还不是科里化 因为要引入变量 
var array = [3, 2, 1, 4, 5, 6, 7, 8]
reduce(filter(array, function(array) {
            return n % 2 === 0
        }), function(prev, next) {
            return prev + next
        },0)


/*需要使用自定义的 reduce 递归 这是一个作业 */  /*？？？？？？？？？？？？学完之后 再来写*/ 



/*setTimeout*/
/*old function  new function  call this  */
    setTimeout(function() {
            console.log(this)
        }.bind({
            name: "test"
        }), 2000)

 /*without bind */
 setTimeout(function() {
            console.log(this)
        }, 2000)


/*the setTimeout has a setTimeout */
/*which setTimeout will be called first?*/
/*代码的执行顺序 是 先执行这句话 console.log(this)*/
setTimeout(function(a) {
            debugger;  
            console.log(this) // 两个this 不一样 this 是动态的 
            setTimeout(function(a) { // 这个函数 没有 其他的object 来bind 它 所以就是直接用window 来call 
                console.log(this)
            }, 1000)
}.bind({
           name: "test"
}), 1000)


/*这样 两个setTimeout 都输出同样的结果*/
/*the new function is called by the object in old function*/
 setTimeout(function(a) {
            debugger;
            console.log(this)
            setTimeout(function(a) {
                console.log(this)
            }.bind(this), 1000)
}.bind({
            name: "test"
}), 2000)


/*ES6 rule：this is a var，is a var. */
/*looking for the value of this depends on which scope the this is in */
/* being same value , some "this" living diff places of the function could be got by ES6 arrow function, nothing is inexplicit    */

 setTimeout(function(a) {
            console.log(this)
            setTimeout((a) => console.log(this), 1000)
 }.bind({
            name: "test"
 }), 2000)






 
 
  
