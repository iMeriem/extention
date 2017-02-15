// this is the code which will be injected into a given page...

(function() {

	var logoImage = new Image(14,14);
	// logoImage.src = "https://www.facebook.com/photo.php?fbid=125841384569410&set=a.125841491236066.1073741826.100014306461490";

	var logo = document.createElement("img");
	// logo.src = logoImage;
	logo.className = '_3-8_ _49he img';

	var butt = document.createElement('button');
	butt.appendChild(logo);
	butt.textContent = 'Comparer sur example.com'; // Compare on Amazon or ebay
	butt.Image = "logo.png";
	butt.className = '_4jy0 _4jy3 _517h _51sy _42ft';
	var div = document.getElementsByClassName('_2sfx')[0].appendChild(butt);

	butt.onclick = function() { 
		
		var title = document.getElementsByClassName("_l53")[0].lastChild;

		var x = title.innerHTML;
		location.href = "example.com/* /* "+x;

		// console.log( x );		
		
	};

		
	alert('Congrats! Button added with success');

})();


	
	