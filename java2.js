/*var fs =require('fs');
var content= fs.readFileSync('text.txt')
.toString();
console.log(content);
*/
/*var fs = require('fs');
fs.readFile('text.txt',function(err,data)
	{	if(err) throw err;
		var str = data.toString();
console.log('line 4',str);})
console.log('hey');

var fs=require('fs');
fs.readFile('text.txt',function hello(data)

{lines = data.split("\r\n|\r|\n"); 
console.log( lines.length);})*/

var countLines=require('./count');
countLines('text.txt',function(lines){
	console.log('lines=',lines);
})
console.log('hey');
