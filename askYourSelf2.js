/* build your own curry function
作业是 柯里化 其他函数的 函数 
*/
/*什么是科里化*/
/*以下这个函数是关于x 和 y 的函数*/
function sum(x,y){
return x+y
}
/*从上面这个函数变成下面这个函数的过程 叫做科里化*/

/*以下这个函数是固定了x的值，所以只是关于y的函数*/
function addOne(y){
return sum(1,y)
}

/*in order to invoke  curry(sum,1),so wirte down the function curry not addOne  */
/*pat attention two points of function: what is input and output */
/*函数式：形式大于逻辑*/

/*用简单的代码来实践科里化： addOne 变成 curry*/
/*固定了一个参数 另外一个参数来自于另外一个函数*/
  function sum(x, y) {
            return x + y
        }

  function curry(fn, p1) {
            return function(p2) {
                return fn.call(undefined, p1, p2)
            }
        }
  var test = curry(sum,2)
  test(2)
  
/*完全不暴露参数，姿势也有优雅：只接受一个函数，返回一个函数*/
 function sum(x, y) {
            return x + y
        }

 function curry(fn) {
            return function(p1) {
            return function(p2) {
            return fn.call(undefined, p1, p2)
 }
 }
 }
var test1 = curry(sum)
var test2 = test1(2)
var test2(3)
var addTwo = test1(2)/*固定一个参数 也就是科里化之后的sum 当中的一个参数 被设定成为2 */









/*guss the souce code:Array.prototype.splice/
/*apply underscore.js to create a function*/
/*anything left ？*/




