// Hello! Welcome to my Javasript for the Ajjrumiyyah Learning Platform
// This is the code that is universal to all pages
// Each page can otherwise have its own Javascript as well
console.log('java booted up!');

// Maintains that every unit block has two columns split equally
// by setting the number of rows to have the number of children
const collection = document.getElementsByClassName('grid');
for (let i = 0; i < collection.length; i++) {
	collection[i].setAttribute(
		'style',
		'grid-template-rows: repeat(' +
			Math.ceil(collection[i].childElementCount / 2) +
			', 1fr)'
	);
}

changeToTheme('sepia');
// Reads the theme stored in cookies if it exists
changeToTheme(localStorage.getItem('theme'));

// Defines how to change theme
function changeToTheme(theme) {
	document.body.setAttribute('theme', theme);
	console.log('set theme to ' + theme + '!');
	localStorage.setItem('theme', theme);
}

//Logic for the Arabic Font Changer
function incrementFont(amount) {
	let currentFont = parseInt(document.getElementById('font').innerHTML);
	let targetFont = currentFont + Number(amount);
	function setFont() {
		document.getElementById('font').innerHTML = targetFont;
		document.body.style.setProperty(
			'--arabicFontSize',
			targetFont * 0.3 + 1.3 + 'rem'
		);
	}
	switch (targetFont) {
		case 6:
		case 0:
			break;
		case 5:
			document.getElementById('plus').setAttribute('disabled', '');
			setFont();
			break;
		case 1:
			document.getElementById('minus').setAttribute('disabled', '');
			setFont();
			break;
		case 4:
			document.getElementById('plus').removeAttribute('disabled', '');
			setFont();
			break;
		case 2:
			document.getElementById('minus').removeAttribute('disabled', '');
		case 3:
			setFont();
			break;
	}
}

// To toggle whether the setting drawer appears or disappears
function toggleDrawer() {
	let drawer = document.getElementsByClassName('drawer')[0];
	let drawerState = drawer.hasAttribute('open');
	if (drawerState) {
		drawer.removeAttribute('open');
	} else {
		drawer.setAttribute('open', '');
	}
}
