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
        
        var solider = createSolier()
