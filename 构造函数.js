       /*把匿名函数都放在一起 in order to save memory space；*/
       /* 所有的array 都分享这一个含有所有函数的 地址 这样的话 就避免一个array 就有一个含有所有函数的  地址*/
       var soliderCommom = {
            兵种: "美国大兵",
            攻击力: 5,
            行走: function() { /*走两步的代码*/ },
            奔跑: function() { /*狂奔的代码*/ },
            死亡: function() { /*passed away*/ },
            攻击: function() { /*攻击的代码*/ },
            防御: function() { /*要脸*/ }
        }

        function createSolider() {
            var obj = {
                ID: i,
                生命值: 42,
            }
            obj.__proto__ = soliderCommom
            return obj
        }
        
      /*一次性制作100个array*/
       var soldiers = []
       for(var i =0;i<100;i++){
       soldiers.push(createSolier())
       }
        
      ===========================================================================================================
     /*以下修改代码 为了 让代码第一部分和第二部分直接看起来就是有联系的*/

     function createSolider() {
            var obj = {
                ID: i,
                生命值: 42,
            }
            obj.__proto__ = createSolier.prototype
            /* 两个东东存的东西是一样的 因为地址一样 */
            return obj
        }           


      createSolier.prototype = {
            兵种: "美国大兵",
            攻击力: 5,
            行走: function() { /*走两步的代码*/ },
            奔跑: function() { /*狂奔的代码*/ },
            死亡: function() { /*passed away*/ },
            攻击: function() { /*攻击的代码*/ },
            防御: function() { /*要脸*/ }
        }
      /*以上就是构造函数*/
      /*原形：prototype（共有属性）或者换成 XXX 也是可以的 */
      /*以下就是如何使用构造函数*/
   
     
       var soldiers = []
       for(var i =0;i<100;i++){
       Array.prototype.push.call(soldiers,createSolier.call())
       /*soldiers.push.call(soldiers,createSolier.call())*/
       }        
       ==============================================================================================================

       /*new 这个关键词的出现*/
       /* 使得下面这个函数少了两句话 */

       function createSoldier(name){
       this.ID = i
       this.生命值= 42
       this.name = name || "无名战士"
}
      //createSoldier.prototype = {
      // constructor: createSoldier 
      // /*谁创建了createSoldier：createSoldier*/
    
      // } 

      /* 以下这种写法不好 会把 constructor这个属性覆盖掉 或者说 上面那个constructor 所在的地址 没有任何object 来引用了       
      // createSoldier.prototype = {
      //  兵种: "美国大兵",
      //      攻击力: 5,
      //      行走: function() { /*走两步的代码*/ },
      //      奔跑: function() { /*狂奔的代码*/ },
      //      死亡: function() { /*passed away*/ },
      //      攻击: function() { /*攻击的代码*/ },
      //      防御: function() { /*要脸*/ }    
      // } 
      /*要么在上面 直接添加 constructor: createSoldier */
      /* 要么 推荐这种*/
      createSoldier.prototype.兵种 ="美国大兵"
      createSoldier.prototype.攻击力 = 5
      createSoldier.prototype.行走 = function(){/*走两步的代码*/} 
      createSoldier.prototype.奔跑 = function(){/*狂奔的代码*/}
      createSoldier.prototype.死亡 = function(){/*passed away*/} 
      createSoldier.prototype.攻击 = function(){/*攻击的代码*/} 
      createSoldier.prototype.防御 = function(){/*要脸*/}

      var soldiers = []
      for(var i =0;i<100;i++){
        soldiers.push(new createSoldier())       
       }    


      =========================================================================================================
      1 构造函数首字母大写 
      2 构造函数可以省掉 create 
      3 如果构造函数没有参数，那么可以不要括号 
      4 以下代码是 这是最好的一个版本 
      /* 以下 构造函数确定了私有属性 原形链 中的 prototype 确定了共有属性 */
       function Soldier(name){
       this.ID = i
       this.生命值= 42
       this.name = name || "无名战士"
}      
      createSoldier.prototype.兵种 ="美国大兵"
      createSoldier.prototype.攻击力 = 5
      createSoldier.prototype.行走 = function(){/*走两步的代码*/} 
      createSoldier.prototype.奔跑 = function(){/*狂奔的代码*/}
      createSoldier.prototype.死亡 = function(){/*passed away*/} 
      createSoldier.prototype.攻击 = function(){/*攻击的代码*/} 
      createSoldier.prototype.防御 = function(){/*要脸*/}


      var soldiers = []
      for(var i =0;i<100;i++){
      soldiers.push(new Soldier )       
       }  
      ==========================================================================================================
      js new ： 创建一个对象同时指定特有属性和共有属性 
      共有属性 必须要放在 prototype 之后 
      
       
