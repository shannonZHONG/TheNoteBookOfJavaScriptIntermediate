/*
要求不使用 class，完成如下需求：

写出一个构造函数 Animal
输入为空
输出为一个新对象，该对象的共有属性为 {行动: function(){}}，没有自有属性
再写出一个构造函数 Human
Human 继承 Animal
输入为一个对象，如 {name: 'Frank', birthday: '2000-10-10'}
输出为一个新对象，该对象自有的属性有 name 和 birthday，共有的属性有物种（人类）、行动和使用工具
在写出一个构造函数 Asian
Asian 继承 Human
输入为一个对象，如 {city: '北京', name: 'Frank', birthday: '2000-10-10' }
输出为一个新对象，改对象自有的属性有 name city 和 bitrhday，共有的属性有物种、行动和使用工具和肤色
既

最后一个新对象是 Asian 构造出来的
Asian 继承 Human，Human 继承 Animal
*/

/*唯一的问题就是 dataOfbirth 传的字体有问题 */
 function Animal() {}
        Animal.prototype.行走 = function() { /*Animal的行走的代码*/ }

        function Human(options) {
            this.name = options.name
            this.birthDay = options.birthDay
        }

        Human.prototype.物种 = "人类"
        Human.prototype.行动 = function() { /*Human的行走的代码*/ }
        Human.prototype.使用工具 = function() { /*Human的使用工具的代码*/ }

        function fakeHuman() {}
        fakeHuman.__proto__ = Animal.prototype
        Human.prototype.__proto__ = new fakeHuman()

        function Asian(options1) {
            Human.call(this,option1)
            this.city = options1.city
            this.name = options1.name
            this.birthday = options1.birthday
         
        }
        Asian.prototype.物种 = function() { /*Asian 的物种代码*/ }
        Asian.prototype.行动 = function() { /*Asian 的行动代码*/ }
        Asian.prototype.使用工具 = function() { /*Asian使用工具代码 的*/ }
        Asian.prototype.肤色 = "yellow"

        function fakeAsian() {}
        fakeAsian.__proto__ = Human.prototype
        Asian.prototype.__proto__ = new fakeAsian()
        var jack = new Asian({
            name: "Jack",
            city: "chongQIng",
            dataOfBirth: "1990-1-1"
        })
