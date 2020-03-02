/*
 * Sets Hue, Saturation, and Lightness, with the latter two
 * as constants for all returned values and the hue as a variable
 * dependent on the parameters. A row of min. length would get a hue
 * of zero, and a row of max length would get a hue of 360.
 */
function getColor(value, minValue, maxValue) {
	let s = 100;
	let l = 45;
	let h = (value - minValue)/(maxValue-minValue) * 360;
	
	let color = "hsl("+h+", "+s+"%, "+l+"%)";
	return color;
}

/*
 * this function displays the array to the screen
 * note that the max element is at most the length of arr
 */
function showArray(arr,parentID) {
	// get the table with id="parentID" so we can add elements to it
	let $displayTable = $('<table class="displaySort"></table>');
	// set the width proportional to the size of the array
	$displayTable.width(arr.length * 7 + 'px');
	// loop through each row in the table
	for (let i = 0; i < arr.length; i++) {
		// create a row in the table
		let $tableRow = $('<tr class="mazeRow"></tr>')
		let rowColor = getColor(arr[i],1,arr.length);
		for (let j = 0; j < arr.length; j++) {
			// create the cell
			let $cell = $('<td>&nbsp;</td>')
			// colorize the cell
			if (j<arr[i]){$cell.css('background',rowColor);}
			else {$cell.css('background','white');}
			$tableRow.append($cell);
		}
		// add the row to the table
		$displayTable.append($tableRow);
	}
	// get the parent and add the table to the parent.
	let $parentDiv = $('#'+parentID);
	$parentDiv.append($displayTable);
}

/*
 * This is the "main" method, the method that will set the random array
 * creation and sorting into motion.
 */
$(document).ready(function () {
	// generate and display unsorted array
	let unsorted = generateRandomArray(75);
	showArray(unsorted,'unsortedArray');
	
	// sort and display sorted array
	let sorted = mergeSort(unsorted);
	showArray(sorted,'sortedArray');
});
