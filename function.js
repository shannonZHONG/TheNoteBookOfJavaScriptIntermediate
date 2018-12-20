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





  

  
  
  
  
  
  
  
  
  
  
 
 
  
