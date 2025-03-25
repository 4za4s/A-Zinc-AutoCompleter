javascript:
var upgrading = '';
setInterval( function() { 
	for (row = 1; row < 12; row++){ 
		for (column = 1; column < 14; column++){
			if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(2)") !== null) {
				switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(2)").innerHTML){
					case "A":
						if (upgrading == '' || upgrading == 'A') {
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) { 
								Pro = Pro*1000;
							}
							if (Pro < 11) {
								upgrading = 'A';
								console.log('A!');
								for (rowA = 1; rowA < 12; rowA++){
									for (columnB = 1; columnB < 14; columnB++){
										document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click()
										if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
											switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
												case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;	
											}
										}
									}		
								}
							}
							else if (upgrading == 'A'){
								upgrading = '';
								console.log('not A')
							}
						}
						break;
						
					case "B":
						if (upgrading == '' || upgrading == 'B'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'B';
									console.log('B!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.countDiv > span:nth-child(2)").innerText)
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.countDiv > span:nth-child(2)").innerText)
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'B'){
									upgrading = '';
									console.log('not B')
								}
							}
							else if (upgrading == 'B'){
								upgrading = '';
								console.log('not B')
							}
						}
						break;
						
					case "C":
						if (upgrading == '' || upgrading == 'C'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'C'
									console.log('C!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'C'){
									upgrading = '';
									console.log('not C')
								}
							}
							else if (upgrading == 'C'){
								upgrading = '';
								console.log('not C')
							}
						}
						break;
						
					case "D":
						if (upgrading == '' || upgrading == 'D'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row+2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row+2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'D';
									console.log('D!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'D'){
									upgrading = '';
									console.log('not D')
								}
							}
							else if (upgrading == 'D'){
								upgrading = '';
								console.log('not D')
							}
						}
						break;
						
					case "E":
						if (upgrading == '' || upgrading == 'E'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row+2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row+2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'E';
									console.log('E!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'E'){
									upgrading = '';
									console.log('not E')
								}
							}
							else if (upgrading == 'E'){
								upgrading = '';
								console.log('not E')
							}
						}
						break;
						
					case "F":
						if (upgrading == '' || upgrading == 'F'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row+2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row+2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'F';
									console.log('F!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'F'){
									upgrading = '';
									console.log('not F')
								}
							}
							else if (upgrading == 'F'){
								upgrading = '';
								console.log('not F')
							}
						}
						break;
						
					case "G":
						if (upgrading == '' || upgrading == 'G'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column+2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column+2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'G';
									console.log('G!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'G'){
									upgrading = '';
									console.log('not G')
								}
							}
							else if (upgrading == 'G'){
								upgrading = '';
								console.log('not G')
							}
						}
						break;
						
					case "H":
						if (upgrading == '' || upgrading == 'H'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column+2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column+2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'H';
									console.log('H!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'H'){
									upgrading = '';
									console.log('not H')
								}
							}
							else if (upgrading == 'H'){
								upgrading = '';
								console.log('not H')
							}
						}
						break;
						
					case "I":
						if (upgrading == '' || upgrading == 'I'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column+2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column+2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'I';
									console.log('I!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'I'){
									upgrading = '';
									console.log('not I')
								}
							}
							else if (upgrading == 'I'){
								upgrading = '';
								console.log('not I')
							}
						}
						break;
						
					case "J":
						if (upgrading == '' || upgrading == 'J'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column+2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column+2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'J';
									console.log('J!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'J'){
									upgrading = '';
									console.log('not J')
								}
							}
							else if (upgrading == 'J'){
								upgrading = '';
								console.log('not J')
							}
						}
						break;
						
					case "K":
						if (upgrading == '' || upgrading == 'K'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'K';
									console.log('K!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'K'){
									upgrading = '';
									console.log('not K')
								}
							}
							else if (upgrading == 'K'){
								upgrading = '';
								console.log('not K')
							}
						}
						break;
						
					case "L":
						if (upgrading == '' || upgrading == 'L'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'L';
									console.log('L!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'L'){
									upgrading = '';
									console.log('not L')
								}
							}
							else if (upgrading == 'L'){
								upgrading = '';
								console.log('not L')
							}
						}
						break;
						
					case "M":
						if (upgrading == '' || upgrading == 'M'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'M';
									console.log('M!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'M'){
									upgrading = '';
									console.log('not M')
								}
							}
							else if (upgrading == 'M'){
								upgrading = '';
								console.log('not M')
							}
						}
						break;
						
					case "N":
						if (upgrading == '' || upgrading == 'N'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'N';
									console.log('N!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'N'){
									upgrading = '';
									console.log('not N')
								}
							}
							else if (upgrading == 'N'){
								upgrading = '';
								console.log('not N')
							}
						}
						break;
						
					case "O":
						if (upgrading == '' || upgrading == 'O'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'O';
									console.log('O!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'O'){
									upgrading = '';
									console.log('not O')
								}
							}
							else if (upgrading == 'O'){
								upgrading = '';
								console.log('not O')
							}
						}
						break;
						
					case "P":
						if (upgrading == '' || upgrading == 'P'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'P';
									console.log('P!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'P'){
									upgrading = '';
									console.log('not P')
								}
							}
							else if (upgrading == 'P'){
								upgrading = '';
								console.log('not P')
							}
						}
						break;
						
					case "Q":
						if (upgrading == '' || upgrading == 'Q'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'Q';
									console.log('Q!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'Q'){
									upgrading = '';
									console.log('not Q')
								}
							}
							else if (upgrading == 'Q'){
								upgrading = '';
								console.log('not Q')
							}
						}
						break;
						
					case "R":
						if (upgrading == '' || upgrading == 'R'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'R';
									console.log('R!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'R'){
									upgrading = '';
									console.log('not R')
								}
							}
							else if (upgrading == 'R'){
								upgrading = '';
								console.log('not R')
							}
						}
						break;
						
					case "S":
						if (upgrading == '' || upgrading == 'S'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'S';
									console.log('S!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'S'){
									upgrading = '';
									console.log('not S')
								}
							}
							else if (upgrading == 'S'){
								upgrading = '';
								console.log('not S')
							}
						}
						break;
						
					case "T":
						if (upgrading == '' || upgrading == 'T'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'T';
									console.log('T!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'T'){
									upgrading = '';
									console.log('not T')
								}
							}
							else if (upgrading == 'T'){
								upgrading = '';
								console.log('not T')
							}
						}
						break;
						
					case "U":
						if (upgrading == '' || upgrading == 'U'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + (column-2) + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'U';
									console.log('U!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'U'){
									upgrading = '';
									console.log('not U')
								}
							}
							else if (upgrading == 'U'){
								upgrading = '';
								console.log('not U')
							}
						}
						break;
						
					case "V":
						if (upgrading == '' || upgrading == 'V'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'V';
									console.log('V!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'V'){
									upgrading = '';
									console.log('not V')
								}
							}
							else if (upgrading == 'V'){
								upgrading = '';
								console.log('not V')
							}
						}
						break;
						
					case "W":
						if (upgrading == '' || upgrading == 'W'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'W';
									console.log('W!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'W'){
									upgrading = '';
									console.log('not W')
								}
							}
							else if (upgrading == 'W'){
								upgrading = '';
								console.log('not W')
							}
						}
						break;
						
					case "X":
						if (upgrading == '' || upgrading == 'X'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'X';
									console.log('X!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '∥') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'X'){
									upgrading = '';
									console.log('not X')
								}
							}
							else if (upgrading == 'X'){
								upgrading = '';
								console.log('not X')
							}
						}
						break;
						
					case "Y":
						if (upgrading == '' || upgrading == 'Y'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'Y';
									console.log('Y!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'Y'){
									upgrading = '';
									console.log('not Y')
								}
							}
							else if (upgrading == 'Y'){
								upgrading = '';
								console.log('not Y')
							}
						}
						break;
					
					case "Z":
						if (upgrading == '' || upgrading == 'Z'){
							var Pro = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							var ProPrev = parseInt(document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText.replace(/,/g, ''))
							if ('+' + Pro + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								Pro = Pro*1000;
							}
							if ('+' + ProPrev + 'K' == document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + (row-2) + ") > td:nth-child(" + column + ") > div > div.countDiv > span:nth-child(2)").innerText) {
								ProPrev = ProPrev*1000;
							}
							if ( ProPrev > 10) {
								if (Pro < 11){
									upgrading = 'Z';
									console.log('Z!');
									for (rowA = 1; rowA < 12; rowA++){
										for (columnB = 1; columnB < 14; columnB++){
											document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + row + ") > td:nth-child(" + column + ") > div > div:nth-child(4)").click();
											if (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)") !== null) {
												switch (document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div:nth-child(2)").innerHTML){
													case "A":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "B":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "C":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "D":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "E":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'												document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click();
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "F":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "G":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "H":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "I":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "J":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "K":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "L":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "M":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "N":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { //'∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "O":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "P":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Q":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "R":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "S":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "T":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "U":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "V":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "W":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "X":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Y":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												
												case "Z":
													if ( document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").innerHTML == '▶') { // '∥' '▶'
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div > div.centerDiv > div > span").click(); 
													}
													document.querySelector("#game > div > div.container > div > table > tbody > tr:nth-child(" + rowA + ") > td:nth-child(" + columnB + ") > div").click()
												break;
												}
											}
										}		
									}
								}
								else if (upgrading == 'Z'){
									upgrading = '';
									console.log('not Z')
								}
							}
							else if (upgrading == 'Z'){
								upgrading = '';
								console.log('not Z')
							}
						}
						break;
				
				}
			}
		}
	}
}, 10); 
