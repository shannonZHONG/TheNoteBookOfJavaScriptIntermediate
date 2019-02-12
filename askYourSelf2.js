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








/*guss the souce code:Array.prototype.splice/
/*apply underscore.js to create a function*/
/*anything left ？*/




