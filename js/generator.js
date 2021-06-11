/*
Create a QR Code based on the URL being passed to the website
*/

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const blinksterID = urlParams.get('blinksterID')

console.log(blinksterID);

/*
Generate a QR Code with the following Style
Blinks Orange -> #FB4616
Blinks Logo in the middle
Square edges
...
*/

// https://github.com/kozakdenys/qr-code-styling

var qrCodeURL = "www.move38.com/?ref=" + blinksterID;

const qrCode = new QRCodeStyling({
	width: 300,
	height: 300,
	type: "svg",
	data: qrCodeURL,
	image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
	dotsOptions: {
		color: "#4267b2",
		type: "rounded"
	},
	backgroundOptions: {
		color: "#e9ebee",
	},
	imageOptions: {
		crossOrigin: "anonymous",
		margin: 20
	}
});

qrCode.append(document.getElementById("canvas"));
qrCode.download({ name: "qr", extension: "svg" });