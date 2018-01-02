var iRemocon = new require('iremocon')
  , iremocon = new iRemocon('192.168.12.133') // iRemocon IP
;
var firebase = require("firebase");

var firebaseConfig = require('./firebase_config.js');
firebase.initializeApp(firebaseConfig.config);

function aircon_control(cmd) {
	iremocon.is(cmd, function(err, msg) {
		if (err) {
			console.error(err.cpde, err.error, err.detail);
			return;
		}
		console.log(msg);
	});
}

const path = "/googlehome";
const key = "word";
const db = firebase.database();
db.ref(path).on("value", function(changedSnapshot) {
  const value = changedSnapshot.child(key).val();
  if (value) {
		console.log(value);
	}

	var t = value.split(" ");
	if (t[0] == "aircon") {
		const command = t[1];
		if (command == "つけ") aircon_control('airconon');
		if (command == "消し") aircon_control('airconoff');
	}
});

