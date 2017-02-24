var fs= require('fs');
function countLines(fileName,callback)
{
	fs.readFile(fileName,function(err,data){
		if(err) throw err;
		var str=data.toString();
		var lines=str.split('\n');
		callback(lines.length);
	});

}
module.exports=countLines;