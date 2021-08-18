var message = document.getElementById("message");
const words = [];

function submitFunction() {
	var word_value = document.getElementById("word").value;
	words.push(word_value);
	document.getElementById("dictionary").innerHTML = words;
}
function searchFunction() {
	var search_word = document.getElementById("searched_word").value;
	if (words.includes(search_word)) {
		message.innerHTML = "Cuvantul " + search_word + " se afla in dictionar.";
	} else {
		message.innerHTML = "Cuvantul " + search_word + " nu se afla in dictionar.";
	}
}