const items = document.querySelectorAll('li');
const questions = document.querySelectorAll('.question');

// function
function toggle() {
	const thisItem = this.parentNode;

	items.forEach((item) => {
		if (thisItem == item) {
			thisItem.classList.toggle('open');
			return;
		}
		item.classList.remove('open');
	});
}

// event listener
questions.forEach((question) => {
	question.addEventListener('click', toggle);
});
