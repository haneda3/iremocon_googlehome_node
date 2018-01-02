var iRemocon = new require('iremocon')
  , iremocon = new iRemocon('192.168.12.133') // iRemocon の IP を指定
;


iremocon.is('airconon', function(err, msg) {
	if (err) {
		console.error(err.cpde, err.error, err.detail);
		return;
	}
	console.log(msg);
});


