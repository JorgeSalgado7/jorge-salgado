const url = window.location.origin 

fetch(`${url}/layout/footer.html`)
.then(response => response.text())
.then(data => {
	document.getElementById('footer').innerHTML = data
})