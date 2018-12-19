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


  // 引进 this 
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
 
 
 
 
  
