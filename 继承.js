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

