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
var test1 = curry(sum)// 先科里化 然后就可以直接使用了 不用像上面这样 一步一步的inoke 
test1(2)(3)






/*怎么隐藏三个参数*/
function sum(x, y, z) {
            return [x, y, z]
        }

        function curry(fn) {
            return function(p1) {
                return function(p2) {
                    return function(p3) {
                        return fn.call(undefined, p1, p2, p3)
                    }
                }
            }
        }

var curriedSum = curry(sum) //先科里化 
//如果参数不被传完整 那么 永远都是函数出来 叫做惰性求值 
//这样做的好处是：当异步求值时，可以等待不同来源的data 
var test= curriedSum(1)(2)(3)


/*函数接受几个参数可以通过length 求到*/
function sum2(x,y){
}  
sum2.length;

function sum3(x,y,z){
}
sum3.length
/*length和计数器 就可以记载 有多少个参数 因为return 的个数 和 length 一样多*/
        
function curry(fn){
var length = fn.length // 获取length 记录return了多少次新函数
// 需要知道已经发生了什么 就是return了多少次 那么就需要一个计数器 来记录
return function(pn){
  //那怎么知道return 是最后一次了 
}
}


/*思路很重要*/
function abc(a,b,c){return [a,b,c]}


function curry(func,fixedParams){
if(!Array.isArray(fixedParams)){ fixedParams = [] }//初始化 

return function(){
let newParams = Array.prototype.slice.call(arguments); // 用 var来代替 真正的数字  把新传的参数打散 
if((fixedParams.length+newParams.length)<func.length){ // 考虑到 最新的参数个数和 function length 的关系 
return curry(func,fixedParams.concat(newParams));
}else{
return func.apply(undefined,fixedParams.concat(newParams))
}

}
}

var curriedAbc = curry(abc)
crriedAbc(1,2)// 因为参数不够所以要继续等待 
crriedAbc(1,2)(3)
/*guss the souce code:Array.prototype.splice/
/*apply underscore.js to create a function*/




