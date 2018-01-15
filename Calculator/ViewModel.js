
function ViewModel() {

	CalculateListener();
	var calculate = new Calculator();

	this.init = function () {
		var result = $("#result");
		var operator = $("#operator");

	}
	function onNumberClick(e) {

		var numberClick = e.target.getAttribute("data-number");
		result.innerHTML = calculate.setNumber(numberClick);
	}

	function onOperationClick(e) {

		var operationClick = e.target.getAttribute("data-operation");
		calculate.setOperation(operationClick);
		operator.innerHTML = operationClick;

	}

	function onClearClick() {
		calculate.clearClick();
		result.innerHTML = '0';
		operator.innerHTML = '0';

	}

	function onCalculateClick() {

		result.innerHTML = calculate.calculateResult();
		operator.innerHTML = '0';
	}

	function CalculateListener() {

		$(".number").on("click", onNumberClick);
		$(".operator").on("click", onOperationClick);;
		$(".calculate").on("click", onCalculateClick);
		$("clear").on("click", onClearClick);

	}

}