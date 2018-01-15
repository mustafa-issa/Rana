function Calculator() {

	var firstNumber = "";
	var secondNumber = "";
	var op = "";

	this.setNumber = function (recievedNum) {

		if (op == "") {
			firstNumber += recievedNum;
			return parseFloat(firstNumber);
		}
		else
			secondNumber += recievedNum;
		return parseFloat(secondNumber);

	};

	this.setOperation = function (operation) {

		op = operation;
	};


	this.clearClick = function () {


		firstNumber = "";
		secondNumber = "";
		op = "";
		flag = false;
	}

	// this.CalculateClick= function(){

	// if ( op != "" && firstNumber != "" ){

	// vm.result.innerHTML = CalculateResult();
	// op = "";
	// vm.operator.innerHTML = "0";
	// }



	// }	


	this.calculateResult = function () {


		if (op == '+') {
			return Number(firstNumber) + Number(secondNumber);
		}
		else
			if (op == '-') {
				return Number(firstNumber) - Number(secondNumber);
			}
			else
				if (op == '*') {
					return Number(firstNumber) * Number(secondNumber);
				}
				else
					if (op == '/') {
						return Number(firstNumber) / Number(secondNumber);
					}

	};





}