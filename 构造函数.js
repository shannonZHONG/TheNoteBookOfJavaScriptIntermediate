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

        function createSolier() {
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
        
     /*以下修改代码 为了 让代码第一部分和第二部分直接看起来就是有联系的*/

     function createSolier() {
            var obj = {
                ID: i,
                生命值: 42,
            }
            obj.__proto__ = createSolier.xxx           
            return obj
        }           


      createSolier.xxx = {
            兵种: "美国大兵",
            攻击力: 5,
            行走: function() { /*走两步的代码*/ },
            奔跑: function() { /*狂奔的代码*/ },
            死亡: function() { /*passed away*/ },
            攻击: function() { /*攻击的代码*/ },
            防御: function() { /*要脸*/ }
        }
     
   
     
       var soldiers = []
       for(var i =0;i<100;i++){
       soldiers.push(createSolier())
       }        
