function checkTitle() {
	let filterPages = 1;
	chrome.storage.sync.get({'filterPages': 1}, function(result) {
		if(result.filterPages == 0)
			filterPages = 0;
		else
			filterPages = 1;
		if(filterPages != 0) {
			const title = document.title;
			const textOptions = ["You opened the page about coronavirus, didn\'t you?",
				"Coronavirus will end without you constantly checking status",
				"You better look at kitties than at coronavirus",
				"Oh, no! It's a coronavirus page again!"];
			let placeholderText = textOptions[Math.floor(Math.random() * textOptions.length)];
			if(title.toLowerCase().indexOf("coronavirus") !== -1
				|| title.toLowerCase().indexOf("covid-19") !== -1
				|| title.toLowerCase().indexOf("wuhan virus") !== -1
				|| title.toLowerCase().indexOf("china virus") !== -1) {
				let currentTime = performance.now();
				let imageUrl = 'https://cataas.com/cat?'+currentTime+'&height=300';
				document.body.innerHTML = "<iframe width='100%' height='400px' frameborder='0' srcdoc=\"<center><h1>"+placeholderText+"</h1><br><img src='"+imageUrl+"'></center>\">";
			}
		}
	});
}
checkTitle();