
const fs = require('fs');
const child_process = require('child_process');

for (var i=0;i<3;i++){
	var workerProcess = child_process.exec('node support.js '+i, function
	(err, stdout, stderr){
		if (err){
			console.log(err.stack);
			console.log('Error code '+err.code);
			console.log('Singnal received '+error.signal);
		}
		console.log('stdout '+stdout);
		console.log('stderr '+stderr);			
	});
	workerProcess.on('exit', function(code){
		console.log('Child process '+process.pid+  ' exited with code '+ code);
	})
}
console.log('progarm exit '+process.pid);