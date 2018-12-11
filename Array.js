  
/*forEach 接收函数 这个被接收的函数有两个参数 一个参数是value 另一个是 key */
var a = ['a', 'b', 'c', 'd']
        a.forEach(function(x, y) {
            console.log('value', x)
            console.log('key', y)
        })

/*函数接收了一个函数 */
function f(x, y) {
       return x + y
        }
f(1, 2)
function f2(fn) {
      console.log("我接受了一个函数")
            return undefined
        }
f2(function(){})


        


