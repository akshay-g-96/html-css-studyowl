/*var abc= 'workshop';

console.log(abc);
abc+=' by studyowl';
console.log(abc);
var second=2;
console.log(second);
 second+=1;
 console.log(second);

 var college='amrita';
 if (college.length<5) {console.log('awesome college');
 }
 else
 {
 	console.log('bad college');
 }
var arr=['a','b','c','d'];
for (var i = 0; i <arr.length; i++) {
	//console.log(arr[i]);
	//process.stdout.write(arr[i]);
	console.log(arr);
}
var obj={
	name:'sfds',
	lang:'node.js'
};
console.log(obj);
function greet(){
	return 'hello';
}
console.log(greet());
var gr=greet();
console.log(gr);
function greet(name)
{
	return 'hello'+ name;
}
var gr=greet('dsfads');
console.log(gr);
function add(a,b)
{
	return(a+b);
}
var c=add(1,2);
console.log(c);*/

function greet (name)
{
	
	return 'hello'+ name();
}
function getname()
{
	return 'fdvsfv';
}
var gr=greet(getname);
console.log(gr);