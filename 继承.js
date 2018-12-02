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




