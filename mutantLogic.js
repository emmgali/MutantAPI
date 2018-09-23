//var chainToTest = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
//var chainToTest2 = ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"];

module.exports = {
	detectMutant : function(chainToTest){

	var chainsDetected = 0;

	chainsDetected+= detectMutantHorizontalChains(chainToTest);
	chainsDetected+= detectMutantVerticalChains(chainToTest);
	chainsDetected+= detectMutantDiagonalChains(chainToTest);

	return chainsDetected >= 1;
	


}
}


detectMutantHorizontalChains = function(chainToTest){
	var n = chainToTest.length;
	var actualLetter = '';
	var chainCounter = 0;
	var chainsFound = 0;

	for (var i = 0; i < n; i++) {
		
		for (var j = 0; j < n; j++) {
			if(j == 0){ 
				actualLetter = chainToTest[i][j];
				chainCounter = 0;
			}else{
				if (actualLetter === chainToTest[i][j]) {
					chainCounter++;
					if(chainCounter == 3){
						chainsFound++;
					}
				}else{
					actualLetter = chainToTest[i][j];
					chainCounter = 0;
				}
			}

		}

		actualLetter = '';
		chainCounter = 0;
	}

	return chainsFound;
}

detectMutantVerticalChains = function(chainToTest){
	var n = chainToTest.length;
	var actualLetter = '';
	var chainCounter = 0;
	var chainsFound = 0;

	for (var i = 0; i < n; i++) {
		
		for (var j = 0; j < n; j++) {
			if(j == 0){ 
				actualLetter = chainToTest[j][i];
				chainCounter = 0;
			}else{
				if (actualLetter === chainToTest[j][i]) {
					chainCounter++;
					if(chainCounter == 3){
						chainsFound++;
					}
				}else{
					actualLetter = chainToTest[j][i];
					chainCounter = 0;
				}
			}

		}

		actualLetter = '';
		chainCounter = 0;
	}

	return chainsFound;
}

detectMutantDiagonalChains = function(chainToTest){
	var n = chainToTest.length;
	var chainsFound = 0;
	var startingLetter_x;
	var startingLetter_y;


	startingLetter_x = 0;
	startingLetter_y = n-1;

	//Left to bot diagonals
	while(startingLetter_y > 0){
		chainsFound += chainsOnDiagonalLeftDown(chainToTest, startingLetter_x, startingLetter_y);
		startingLetter_y--;
	}

	while(startingLetter_x < n){
		chainsFound += chainsOnDiagonalLeftDown(chainToTest, startingLetter_x, startingLetter_y);
		startingLetter_x++;
	}


	//Bot to right top diagonals
	startingLetter_x = n-1;
	startingLetter_y = n-1;

	while(startingLetter_y > 0){
		chainsFound += chainsOnDiagonalDownRight(chainToTest, startingLetter_x, startingLetter_y);
		startingLetter_y--;
	}

	while(startingLetter_x >= 0){
		chainsFound += chainsOnDiagonalDownRight(chainToTest, startingLetter_x, startingLetter_y);
		startingLetter_x--;
	}	


	return chainsFound;
}


//From an starting cell, run over the left-down diagonal(\)
chainsOnDiagonalLeftDown = function(chainToTest, x, y){
	
	var actualLetter = '';
	var chainCounter = 0;
	var chainsFound = 0;
	var i = x;
	var j = y;

	while(i < chainToTest.length && j < chainToTest.length){

		if(j == y){ 
					actualLetter = chainToTest[i][j]
				}else{
					if (actualLetter == chainToTest[i][j]) {
						chainCounter++;
						if(chainCounter == 3){
							chainsFound++;
						}
					}else{
						actualLetter = chainToTest[i][j];
						chainCounter = 0;
					}
				}

		i++;
		j++;

	}

	
	return chainsFound;

}

//From an starting cell, run over the down-right diagonal(/)
chainsOnDiagonalDownRight = function(chainToTest, x, y){
	
	var actualLetter = '';
	var chainCounter = 0;
	var chainsFound = 0;
	var i = x;
	var j = y;

	while(i >= 0 && j < chainToTest.length){

		if(j == y){ 
					actualLetter = chainToTest[i][j]
				}else{
					if (actualLetter == chainToTest[i][j]) {
						chainCounter++;
						if(chainCounter == 3){
							chainsFound++;
						}
					}else{
						actualLetter = chainToTest[i][j];
						chainCounter = 0;
					}
				}

		i--;
		j++;

	}

	
	return chainsFound;

}

