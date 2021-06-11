/*
Create a QR Code based on the URL being passed to the website
*/

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const blinksterID = urlParams.get('blinksterID')

//console.log(blinksterID);

/*
Generate a QR Code with the following Style
Blinks Orange -> #FB4616
Blinks Logo in the middle
Square edges
...
*/

// https://github.com/kozakdenys/qr-code-styling

var qrCodeURL = "www.move38.com/?ref=" + blinksterID;
var qrSize = window.innerWidth * 0.6 - 20;

const qrCode = new QRCodeStyling({
	width: qrSize,
	height: qrSize,
	type: "svg",
	data: qrCodeURL,
	image: "../img/blinks-logow.png",
	dotsOptions: {
		color: "#ff5b13",
		type: "square"
	},
	backgroundOptions: {
		color: "#fff",
	},
	imageOptions: {
		crossOrigin: "anonymous",
		margin: 3
	}
});

qrCode.append(document.getElementById("canvas"));

// update the padding after
document.getElementById("canvas").style.padding = "10px";
document.getElementById("canvas").style.width = qrSize;

// update the secret link at the bottom
document.getElementById("secretLink").innerHTML = "www.move38.com/VIP-8675309?ref="+blinksterID;

// if we want to allow the download of the QR code
//qrCode.download({ name: "qr", extension: "svg" });