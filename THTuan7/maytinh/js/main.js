var calculator = {
    result: '',
    operator: '',
    currentNumber: '',
    decimalAdded: false,
  
    appendNumber: function(num) {
      this.currentNumber += num;
      document.getElementById("result").innerHTML = this.currentNumber;
    },
  
    appendOperator: function(op) {
      this.operator = op;
      this.result = this.currentNumber;
      this.currentNumber = '';
      this.decimalAdded = false;
    },
  
    appendDecimal: function() {
      if (!this.decimalAdded) {
        this.currentNumber += '.';
        document.getElementById("result").innerHTML = this.currentNumber;
        this.decimalAdded = true;
      }
    },
  
    clear: function() {
      this.result = '';
      this.operator = '';
      this.currentNumber = '';
      this.decimalAdded = false;
      document.getElementById("result").innerHTML = '';
    },
  
    calculate: function() {
      var result = '';
      if (this.operator === '+') {
        result = parseFloat(this.result) + parseFloat(this.currentNumber);
      } else if (this.operator === '-') {
        result = parseFloat(this.result) - parseFloat(this.currentNumber);
      } else if (this.operator === '*') {
        result = parseFloat(this.result) * parseFloat(this.currentNumber);
      } else if (this.operator === '/') {
        result = parseFloat(this.result) / parseFloat(this.currentNumber);
      }
      this.clear();
      this.currentNumber = result;
      document.getElementById("result").innerHTML = result;
    }
  };
  
  function appendNumber(num) {
    calculator.appendNumber(num);
  }
  
  function appendOperator(op) {
    calculator.appendOperator(op);
  }
  
  function appendDecimal() {
    calculator.appendDecimal();
  }
  
  function clear() {
    calculator.clear();
  }
  
  function calculate() {
    calculator.calculate();
  }
  