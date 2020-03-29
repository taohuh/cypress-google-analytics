const homePage = document.getElementsByClassName("home-page");

function clickBtn(type) {
	gtag(
		'event', 'click_button',
		{
			'event_label': `${type} Button`,
			'event_category': 'button',
		}
	);
}

function clickBtnLike() {
	clickBtn('Like');
}

function clickBtnDislike() {
	clickBtn('Dislike');
}

if (homePage.length > 0) {
	document
		.getElementById("btn-like")
		.addEventListener("click", clickBtnLike);

	document
		.getElementById("btn-dislike")
		.addEventListener("click", clickBtnDislike);
}