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
/* Human.call(this) 这一句话里面的 this 是 function Soldier 里面的this相当于  把里面（function soldier ）的this 传到 外面（hunman prototype 里面去 ）

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



