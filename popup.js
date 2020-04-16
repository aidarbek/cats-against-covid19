$(document).ready(function() {
	let filterPages = 1;
	chrome.storage.sync.get({'filterPages': 1}, function(result) {
        if(result.filterPages == 0)
        	filterPages = 0;
        else
        	filterPages = 1;
		if(filterPages){
			$('#status #firstchk').prop('checked', true);
		}else{
			$('#status #firstchk').prop('checked', false);
		}
		$("#status #firstchk").change(function() {
			if(filterPages == 0)
				filterPages = 1;
			else
				filterPages = 0;
			chrome.storage.sync.set({filterPages: filterPages}, function() {
	        	console.log('Value is set to ' + filterPages);
	        });
		}); 
	});
});
