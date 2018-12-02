 var parentCommon = {
            吃: '',
            喝: '',
            拉: '',
            撒: ''
        }
 var soldierCommom = {
            兵种: "美国大兵",
            攻击力: 5,
            行走: function() { /*走两步的代码*/ },
            奔跑: function() { /*狂奔的代码*/ },
            死亡: function() { /*passed away*/ },
            攻击: function() { /*攻击的代码*/ },
            防御: function() { /*要脸*/ }

        }

 soldierCommom.__proto__ = parentCommon
 var s = {}
 s.__proto__ = soldierCommom
        /* 可以看出对象s 不仅拥有soldierCommom的所有 还拥有parentCommon*/
        /* 原形链只负责共有属性 私有属性？*/
s.名字 = ""
s.肤色 = ""
s.ID = ""
s.生命值 = ""

       /*  代码比较 散*/
      /* 用 构造函数 是模式固定下来  所以选取 new 这个特别的构造函数 来构造函数 */
  function Soldier(name) {
            this.ID = i
            this.生命值 = 42
            this.name = name || "无名战士"
  }
  Soldier.prototype.兵种 = "美国大兵"
  Soldier.prototype.攻击力 = 5
  Soldier.prototype.行走 = function() { /*走两步的代码*/ }
  Soldier.prototype.奔跑 = function() { /*狂奔的代码*/ }
  Soldier.prototype.死亡 = function() { /*passed away*/ }
  Soldier.prototype.攻击 = function() { /*攻击的代码*/ }
  Soldier.prototype.防御 = function() { /*要脸*/ }
  s = new Soldier()

/*现在唯一的问题是 object s 还没有拥有parentCommom的 共有属性 */

 function Human() {
            this.name = "桃太狼"
            this.肤色 = "你喜欢的颜色"
        }
 Human.prototype.eat = function() {}
 Human.prototype.drink = function() {}
 Human.prototype.poo = function() {}

 function Soldier(name) {
            this.ID = i
            this.生命值 = 42
            this.name = name || "无名战士"
        }
 Soldier.prototype.兵种 = "美国大兵"
 Soldier.prototype.攻击力 = 5
 Soldier.prototype.行走 = function() { /*走两步的代码*/ }
 Soldier.prototype.奔跑 = function() { /*狂奔的代码*/ }
 Soldier.prototype.死亡 = function() { /*passed away*/ }
 Soldier.prototype.攻击 = function() { /*攻击的代码*/ }
 Soldier.prototype.防御 = function() { /*要脸*/ }
 Soldier.prototype.__proto__ = Human.prototype 

 var s = new Soldier()
/*现在唯一的问题是 object s 还没有拥有parentCommom的 私有属性 */
/* 
Human.call(this) 这一句话里面的 this 是 function Soldier 里面的this
相当于  
把里面（function soldier ）的this 传到 外面（hunman prototype 里面去 ）
*/

function Human() {
            this.name = "桃太狼"
            this.肤色 = "你喜欢的颜色"
        }
Human.prototype.eat = function() {}
Human.prototype.drink = function() {}
Human.prototype.poo = function() {}

function Soldier(name) {
Human.call(this)
this.ID = i
this.生命值 = 42
}
        
Soldier.prototype.兵种 = "美国大兵"
Soldier.prototype.攻击力 = 5
Soldier.prototype.行走 = function() { /*走两步的代码*/ }
Soldier.prototype.奔跑 = function() { /*狂奔的代码*/ }
Soldier.prototype.死亡 = function() { /*passed away*/ }
Soldier.prototype.攻击 = function() { /*攻击的代码*/ }
Soldier.prototype.防御 = function() { /*要脸*/ }
Soldier.prototype.__proto__ = Human.prototype 

var s = new Soldier()    


/*
step1: var s = new soldier()   js engine 会自动 给你创建一个空的object 

Step2: 进入函数 function soldier  先执行human.call  执行完之后 会给空对象加上 name 和肤色 这两个属性  
之后再给空对象加上 ID 声明值 这两个属性  
还有一步自动添加  
this. __proto__ = Soldier.prototype    

Step3: 
Soldier.prototype.__proto__ = Human.prototype


Step 4 : 
到这里为止 空对象 不仅有了human的公私属性 ，还有soldier 的共有属性 


*/


/*怎么传一个对象 使对象替换xxx yyy zzz */
==========================================================================================
/*差点完美的例子*/
 function Human(options) {
            this.name = options.name
            this.肤色 = options.肤色
        }
 Human.prototype.eat = function() {}
 Human.prototype.drink = function() {}
 Human.prototype.poo = function() {}

 function Soldier(options) {
            Human.call(this,options)
            this.ID = options.ID
            this.生命值 = 42
        }

 Soldier.prototype.兵种 = "美国大兵"
 Soldier.prototype.攻击力 = 5
 Soldier.prototype.行走 = function() { /*走两步的代码*/ }
 Soldier.prototype.奔跑 = function() { /*狂奔的代码*/ }
 Soldier.prototype.死亡 = function() { /*passed away*/ }
 Soldier.prototype.攻击 = function() { /*攻击的代码*/ }
 Soldier.prototype.防御 = function() { /*要脸*/ }
 Soldier.prototype.__proto__ = Human.prototype

var s = new Soldier({name:"shiran",肤色:"yellow",ID:1})
==========================================================================================

/*上面代码有问题 ： 下划线 prototype 下划线 不能在 生产环境中使用 */

/*Soldier.prototype.__proto__ = Human.prototype 就是这句话*/


// 1 __proto__ 不能用
// Soldier.prototype.__proto__ = Human.prototype
//

function Human(){
// this = {}
// this.__proto__ = Human.prototype
// return this
}

Soldier.prototype = new Human()
//Soldier.prototype.__proto__ === this.__proto_ === Human.prototype
/*但是这句话也不能用*/


/*下面例子说明 Soldier.prototype.__proto__  === Human.prototype*/
function Soldier() {
  this.ID = options.ID
  this.生命值 = 42
}
        
function Human() {}
h = new Human()
h.__proto__ === Human.prototype
        
Soldier.prototype = new Human()
Soldier.prototype.__proto__ === Human.prototype

/* 回到那个差点完美的例子*/

 function Human(options) {
            this.name = options.name
            this.肤色 = options.肤色
        }
        Human.prototype.eat = function() {}
        Human.prototype.drink = function() {}
        Human.prototype.poo = function() {}

        function Soldier(options) {
            Human.call(this, options)
            this.ID = options.ID
            this.生命值 = 42
        }
//这样修改之后 会多一个name 肤色 这两个属性  
        Soldier.prototype = new Human({
            name: "",
            肤色: ""
        })
        Soldier.prototype.兵种 = "美国大兵"
        Soldier.prototype.攻击力 = 5
        Soldier.prototype.行走 = function() { /*走两步的代码*/ }
        Soldier.prototype.奔跑 = function() { /*狂奔的代码*/ }
        Soldier.prototype.死亡 = function() { /*passed away*/ }
        Soldier.prototype.攻击 = function() { /*攻击的代码*/ }
        Soldier.prototype.防御 = function() { /*要脸*/ }


        var s = new Soldier({
            name: "shiran",
            肤色: "yellow",
            ID: 1
        })

        
/*声明一个假的 用假的来 替代 Soldier.prototype.__proto__ = Human.prototype  */ 
/**/
function Human(options) {
            this.name = options.name
            this.肤色 = options.肤色
        }
Human.prototype.eat = function() {}
Human.prototype.drink = function() {}
Human.prototype.poo = function() {}
function Soldier(options) {
            Human.call(this, options)
            this.ID = options.ID
            this.生命值 = 42
        }
// 这三行代码是兼容IE的 
function fakeHuman(){}
fakeHuman.prototype = Human.prototype
Soldier.prototype = new fakeHuman()
// 这一行代码不兼容IE 
Soldier.prototype =object.create(Human.prototype)
// in your mind 
Soldier.prototype.__proto__ = Human.prototype

 
Soldier.prototype.兵种 = "美国大兵"
Soldier.prototype.攻击力 = 5
Soldier.prototype.行走 = function() { /*走两步的代码*/ }
Soldier.prototype.奔跑 = function() { /*狂奔的代码*/ }
Soldier.prototype.死亡 = function() { /*passed away*/ }
Soldier.prototype.攻击 = function() { /*攻击的代码*/ }
Soldier.prototype.防御 = function() { /*要脸*/ }


var s = new Soldier({
            name: "shiran",
            肤色: "yellow",
            ID: 1
        })

// 私有属性 在 constructor 公有属性在 constructor 外面 
/*用class 这个写法*/
    class Human{
    constructor(options){
    this.name = options.name
    this.肤色 = options.肤色
}
    eat(){}
    drink(){}
    poon(){}
}


// extends： Soldier.prototype.__proto__ = Human.prototype  
// extends：只继承公有属性 
//super：就相当于 Human 

class Soldier extends Human{
    constructor(options){
    super(options)
    this.ID = options.id
    this.生命值= 42
    this.兵种 = "美国大兵"
    this.攻击力 = 5
}
    walking(){}
    running(){}
    passedAway(){}
    fighting(){}
    protecting(){}
}

var s = new Soldier({
            name: "shiran",
            肤色: "yellow",
            ID: 1
        })
