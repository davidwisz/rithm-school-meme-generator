var memeCount = 0;
document.getElementById('mg-form').addEventListener('submit', function(e) {
	//STOP THE FORM FROM ACTUALLY SUBMITTING
	e.preventDefault();

	//VALIDATE FORM INPUT
	if (document.getElementById('mg-img').value == '' || document.getElementById('mg-top-text').value == '' || document.getElementById('mg-bottom-text').value == '') {
		alert('Please complete all the fields.');
		return false
	}
	
	//BUILD THE HTML ELEMENTS FROM THE FORM INPUT
	var div = document.createElement('div');
	div.className = 'meme-container';
	var img = document.createElement('img');
	img.src = document.getElementById('mg-img').value;
	var headline = document.createElement('h2');
	headline.textContent = document.getElementById('mg-top-text').value;
	var punchline = document.createElement('h3');
	punchline.textContent = document.getElementById('mg-bottom-text').value;
	var deletebtn = document.createElement('button');
	deletebtn.className = 'delete-button';
	deletebtn.innerHTML = 'DELETE';
	div.appendChild(img);
	div.appendChild(headline);
	div.appendChild(punchline);
	div.appendChild(deletebtn);
	div.id = 'meme' + memeCount;

	//INSERT THE HTML INTO THE OUTPUT DIV
	document.getElementById('mg-output').appendChild(div);

	//FIX THE PROBLEM THAT THE ABSOLUTELY POSITIONED IMAGE DOESN'T AUTOMATICALLY EXPAND ITS PARENT DIV TO MATCH ITS DIMENSIONS
	img.addEventListener('load', function() {
  		div.style.height = this.naturalHeight + 'px';
	});

	//RESET THE FORM
	document.getElementById('mg-form').reset();

	//ADD FUNCTIONALITY TO THE DELETE BUTTON
	deletebtn.addEventListener('click', function() {
		var elem = document.getElementById(div.id); 
		elem.parentNode.removeChild(elem);
	});

	//INCREMENT THE MEME COUNT
	memeCount++;


})