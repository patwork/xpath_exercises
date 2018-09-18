document.addEventListener("DOMContentLoaded", function() {
	getWOJ();
});

function getWOJ() {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText)
		}
	};
	xhttp.open("GET", "/woj", true);
	xhttp.setRequestHeader("Content-type", "text/plain");
	xhttp.send();
}
